import { db } from '@/db/index';
import { monthlyIndicators, monthlyBulletins, weeklySituational } from '@/db/schema';
import { desc, eq } from 'drizzle-orm';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import EpidemiologiaClient from './EpidemiologiaClient';

export const dynamic = 'force-dynamic';

export default async function EpidemiologiaPage() {
    // FECH DATA FROM BACKEPI TABLES

    // 1. Indicadores (Rendimiento y Análisis)
    const indRendimiento = await db.select().from(monthlyIndicators)
        .where(eq(monthlyIndicators.tab, 'rendimiento'))
        .orderBy(desc(monthlyIndicators.createdAt));
    const indAnalisis = await db.select().from(monthlyIndicators)
        .where(eq(monthlyIndicators.tab, 'analisis'))
        .orderBy(desc(monthlyIndicators.createdAt));

    // 2. Boletines (Epidemiológico, IAAS, Estadístico)
    const bolEpi = await db.select().from(monthlyBulletins)
        .where(eq(monthlyBulletins.tab, 'epidemiologico'))
        .orderBy(desc(monthlyBulletins.createdAt));
    const bolIaas = await db.select().from(monthlyBulletins)
        .where(eq(monthlyBulletins.tab, 'infecciones'))
        .orderBy(desc(monthlyBulletins.createdAt));
    const bolEst = await db.select().from(monthlyBulletins)
        .where(eq(monthlyBulletins.tab, 'estadistico'))
        .orderBy(desc(monthlyBulletins.createdAt));

    // 3. Sala Situacional Semanal (Metaxenicas, Materno, Respiratorio)
    const salaMetaxenicas = await db.select().from(weeklySituational)
        .where(eq(weeklySituational.tab, 'metaxenicas'))
        .orderBy(desc(weeklySituational.createdAt));
    const salaMaterno = await db.select().from(weeklySituational)
        .where(eq(weeklySituational.tab, 'materno'))
        .orderBy(desc(weeklySituational.createdAt));
    const salaRespiratorio = await db.select().from(weeklySituational)
        .where(eq(weeklySituational.tab, 'respiratorio'))
        .orderBy(desc(weeklySituational.createdAt));

    const mapIndicator = (raw: any) => ({
        id: raw.id,
        title: `Reporte ${raw.month}`,
        date: `${raw.month} ${raw.year}`,
        doc: raw.tab === 'rendimiento' ? 'Rendimiento' : 'Analítica',
        url: raw.documentUrl
    });

    const mapBulletin = (raw: any) => ({
        id: raw.id,
        title: `Boletín ${raw.month} - ${raw.year}`,
        date: format(raw.createdAt, 'dd MMMM yyyy', { locale: es }),
        week: raw.month,
        url: raw.documentUrl
    });

    const mapWeekly = (raw: any) => ({
        id: raw.id,
        title: `Semana Epidemiológica ${raw.weekNumber}`,
        date: `Año ${raw.year}`,
        doc: 'Semanal',
        url: raw.documentUrl
    });

    return (
        <EpidemiologiaClient
            data={{
                indicadores: {
                    rendimiento: indRendimiento.map(mapIndicator),
                    analisis: indAnalisis.map(mapIndicator),
                },
                boletines: {
                    epidemiologicos: bolEpi.map(mapBulletin),
                    iaas: bolIaas.map(mapBulletin),
                    estadisticos: bolEst.map(mapBulletin),
                },
                salaSituacional: {
                    metaxenicas: salaMetaxenicas.map(mapWeekly),
                    materno: salaMaterno.map(mapWeekly),
                    respiratorio: salaRespiratorio.map(mapWeekly),
                }
            }}
        />
    );
}
