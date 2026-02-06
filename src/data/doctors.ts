export type Doctor = {
    id: number;
    name: string;
    specialty: string;
    cmp: string;
    rne?: string;
    image?: string;
    gender: 'M' | 'F';
};

export const DOCTORS_DATA: Doctor[] = [
    {
        id: 1,
        name: "Dr. Carlos Miguel Torres",
        specialty: "Cardiología",
        cmp: "45892",
        rne: "23451",
        gender: "M"
    },
    {
        id: 2,
        name: "Dra. Ana Lucia Vargas",
        specialty: "Pediatría",
        cmp: "56721",
        rne: "34120",
        gender: "F"
    },
    {
        id: 3,
        name: "Dr. Jorge Luis Mendoza",
        specialty: "Traumatología",
        cmp: "38912",
        rne: "19823",
        gender: "M"
    },
    {
        id: 4,
        name: "Dra. María Fernanda Ruiz",
        specialty: "Ginecología y Obstetricia",
        cmp: "67890",
        rne: "45231",
        gender: "F"
    },
    {
        id: 5,
        name: "Dr. Ricardo Silva",
        specialty: "Medicina Interna",
        cmp: "41235",
        rne: "21345",
        gender: "M"
    },
    {
        id: 6,
        name: "Dra. Patricia Castro",
        specialty: "Dermatología",
        cmp: "59012",
        rne: "36781",
        gender: "F"
    },
    {
        id: 7,
        name: "Dr. Eduardo Ríos",
        specialty: "Neurología",
        cmp: "43567",
        rne: "22890",
        gender: "M"
    },
    {
        id: 8,
        name: "Dra. Carmen Rosa Díaz",
        specialty: "Oftalmología",
        cmp: "54321",
        rne: "32145",
        gender: "F"
    },
    {
        id: 9,
        name: "Dr. Fernando Soto",
        specialty: "Urología",
        cmp: "39876",
        rne: "20987",
        gender: "M"
    },
    {
        id: 10,
        name: "Dra. Silvia Paredes",
        specialty: "Endocrinología",
        cmp: "61234",
        rne: "38901",
        gender: "F"
    },
    {
        id: 11,
        name: "Dr. Héctor Castillo",
        specialty: "Cirugía General",
        cmp: "47890",
        rne: "25678",
        gender: "M"
    },
    {
        id: 12,
        name: "Dra. Elena Quispe",
        specialty: "Reumatología",
        cmp: "52341",
        rne: "31234",
        gender: "F"
    }
];

export const SPECIALTIES = Array.from(new Set(DOCTORS_DATA.map(d => d.specialty))).sort();
