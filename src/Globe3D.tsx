import { useRef, useEffect, useCallback } from 'react';
import * as d3 from 'd3';
// @ts-ignore – react-globe.gl has no bundled types
import Globe from 'react-globe.gl';
import earthDay from './assets/earth-blue-marble.jpg';
import locsRaw from './data/mirage-mc-v1.locs.json';
import countriesRaw from './data/mirage-mc-v1.countries.json';

// ── Data ──────────────────────────────────────────────────
const colorArr = [
  '#1f77b4', '#aec7e8', '#ff7f0e', '#ffbb78', '#2ca02c',
  '#98df8a', '#d62728', '#ff9896', '#9467bd', '#c5b0d5',
  '#8c564b', '#c49c94', '#e377c2', '#f7b6d2', '#7f7f7f',
  '#c7c7c7', '#bcbd22', '#dbdb8d', '#17becf', '#9edae5',
];

// Normalize mixed-case keys to match hex accessor expectations
const locs = (locsRaw as any[]).map((d) => ({
  ...d,
  location_rg_country: d.Location_RG_country,
  location_rg_city: d.Location_RG_City,
}));

const countries = countriesRaw as any[];

// Build scales once at module level
const arcThickScale = d3
  .scaleLinear()
  .domain(d3.extent(locs, (d) => d.count) as [number, number])
  .range([0.01, 0.5]);

const colorsCategory = d3
  .scaleOrdinal<string>(colorArr)
  .domain(countries.slice(0, 20).map((d: any) => d.title));

// ── Component ─────────────────────────────────────────────
interface Globe3DProps {
  width: number;
  height: number;
}

export default function Globe3D({ width, height }: Globe3DProps) {
  const globeEl = useRef<any>(null);

  // Enable auto-rotate once the globe mounts
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!globeEl.current) return;
      const controls = globeEl.current.controls();
      controls.autoRotate = true;
      controls.autoRotateSpeed = 0.6;
      controls.enableZoom = false;
      controls.enablePan = false;
      // Start centred on Europe/Atlantic
      globeEl.current.pointOfView({ lat: 30, lng: 10, altitude: 2 }, 0);
    }, 300);
    return () => clearTimeout(timeout);
  }, []);

  const getLng       = useCallback((d: any) => d.long, []);
  const getLat       = useCallback((d: any) => d.lat, []);
  const getHexAlt    = useCallback((d: any) => arcThickScale(d.sumWeight), []);
  const getHexColor  = useCallback(
    (d: any) => colorsCategory(d.points[0]?.location_rg_country) ?? '#888888',
    []
  );
  const getLabelText  = useCallback((d: any) => d.title, []);
  const getLabelColor = useCallback(() => 'rgba(255,255,255,0.85)', []);
  const getLabelSize  = useCallback((d: any) => {
    const max = countries[0]?.count ?? 1;
    return 0.2 + (d.count / max) * 0.3;
  }, []);

  return (
    <Globe
      ref={globeEl}
      width={width}
      height={height}
      globeImageUrl={earthDay}
      backgroundColor="rgba(0,0,0,0)"
      showAtmosphere={true}                                                                                                                              
      atmosphereColor="lightskyblue"                                                                                                                     
      atmosphereAltitude={0.15}      
      // Hex-bin station density
      hexBinPointsData={locs}
      hexBinPointWeight="count"
      hexBinPointLng={getLng}
      hexBinPointLat={getLat}
      hexAltitude={getHexAlt}
      hexBinResolution={4}
      hexTopColor={getHexColor}
      hexSideColor={getHexColor}
      hexBinMerge={false}
      hexTransitionDuration={0}
      // Country labels
      labelsData={countries.slice(0, 20)}
      labelLat={getLat}
      labelLng={getLng}
      labelText={getLabelText}
      labelSize={getLabelSize}
      labelDotRadius={0}
      labelColor={getLabelColor}
      labelResolution={2}
      labelAltitude={0.02}
    />
  );
}
