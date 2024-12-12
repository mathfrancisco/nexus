// feature.model.ts
export interface Feature {
    id: string;
    title: string;
    description: string;
    category?: string; // Opcional
    capabilities?: string[]; // Opcional
    supportedPlatforms?: string[]; // Opcional
    icon?: string; // Opcional
    benefits?: string[]; // Opcional
    details?: any; // Opcional - Você pode criar uma interface para FeatureDetails se necessário
    configuration?: any; // Opcional
}
