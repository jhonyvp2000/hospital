export type OrgNode = {
    id: string;
    label: string;
    type: 'root' | 'management' | 'department' | 'support';
    children?: OrgNode[];
};

export const ORGANIGRAMA_DATA: OrgNode = {
    id: 'dir-exec',
    label: 'Dirección Ejecutiva',
    type: 'root',
    children: [
        {
            id: 'oci',
            label: 'Órgano de Control Institucional',
            type: 'support'
        },
        {
            id: 'admin',
            label: 'Oficina de Administración',
            type: 'management',
            children: [
                { id: 'logistica', label: 'Logística', type: 'department' },
                { id: 'rrhh', label: 'Recursos Humanos', type: 'department' },
                { id: 'economia', label: 'Economía', type: 'department' },
                { id: 'mantenimiento', label: 'Servicios Generales', type: 'department' }
            ]
        },
        {
            id: 'planeamiento',
            label: 'Unidad de Planeamiento',
            type: 'support'
        },
        {
            id: 'estadistica',
            label: 'Unidad de Estadística e Informática',
            type: 'support'
        },
        {
            id: 'gestion-medica',
            label: 'Dirección de Atleción Integral (Médica)',
            type: 'management',
            children: [
                { id: 'medicina', label: 'Dpto. de Medicina', type: 'department' },
                { id: 'cirugia', label: 'Dpto. de Cirugía', type: 'department' },
                { id: 'pediatria', label: 'Dpto. de Pediatría', type: 'department' },
                { id: 'gineco', label: 'Dpto. de Gineco-Obstetricia', type: 'department' },
                { id: 'emergencia', label: 'Dpto. de Emergencia y UCI', type: 'department' },
                { id: 'anestesiologia', label: 'Centro Quirúrgico', type: 'department' },
                { id: 'apoyo-dx', label: 'Apoyo al Diagnóstico', type: 'department' },
                { id: 'enfermeria', label: 'Dpto. de Enfermería', type: 'department' },
            ]
        }
    ]
};
