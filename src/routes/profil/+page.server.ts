import type { PageServerData, PageServerLoad } from "./$types";

export const load: PageServerLoad    = async () => {
    const dt = [
        {nama: "eric" , umur: 19},
        {nama: "Halo", umur:20},
        {nama: "HHHH", umur:21}
    ]

    const ss = {nama: "JJ", umur : 22}

    return {nama : dt, ss}
};