export const gscard = async function (model: any, reqbody: any, search_list: string[], sort_by: any, status: string) {
    let start: number;
    let length;
    if (typeof reqbody.start === 'undefined') {
        start = 0;
    } else {
        start = parseInt(reqbody.start);
    }
    if (typeof reqbody.length === 'undefined') {
        length = 12;
    } else {
        length = parseInt(reqbody.length);
    }

    if (typeof reqbody.page === 'undefined') {
        start = 0;
    } else {
        const page = parseInt(reqbody.page);
        start = (page * length) - length;
    }
    const search = reqbody.keyword ?? '';
    const where: any = {};
    const countWhere: any = {};

    // Menyiapkan kondisi untuk pencarian
    if (search !== '' && search_list !== null) {
        countWhere.OR = search_list.map((item) => ({[item]: {contains: search, mode: 'insensitive'}}));
        where.OR = [
            ...search_list.map((item) => ({[item]: {contains: search, mode: 'insensitive'}})),
        ];
    }

    // Menyiapkan kondisi untuk status
    switch (status) {
        case 'tenaga pendidik':
            where.OR = where.OR || [];
            where.OR.push({jabatan: {in: ['GURU', 'KEPALA MADRASAH']}});
            break;
        case 'tenaga kependidikan':
            where.jabatan = {not: {contains: 'GURU'}};
            break;
        case 'pimpinan':
            where.jenis = 'PIMPINAN';
            break;
        case 'wali kelas':
            where.jabatan = {contains: 'Wali Kelas'};
            break;
        case 'guru':
            where.bidang_studi = {not: {equals: null}};
            break;
        case 'karyawan':
            where.jenis = 'KARYAWAN';
            break;
        default:
            break;
    }

    // Menyiapkan kondisi untuk sorting
    const orderBy = sort_by;

    const count = await model.count({
        where: countWhere,
    });

    let datas;

    let query;
    try {
        // Menyiapkan query dengan pagination
        if (length >= 1) {
            query = {
                where,
                orderBy: orderBy,
                skip: start,
                take: length,
            }
        } else {
            query = {
                where,
                orderBy,
                skip: start,
            }
        }
        datas = await model.findMany(query);

        // Proses datas sesuai dengan kebutuhan Anda
        const newdata = datas.map((data: any, index: number) => {
            return {
                nomor_urut: start + index + 1,
                ...data,
            };
        });

        return {
            status: 200,
            data: {
                start,
                length,
                recordsTotal: count,
                recordsFiltered: count,
                data: newdata,
            }
        };
    } catch (error) {
        console.log(error)
        return {
            status: 200,
            data: {
                error
            }
        };
    }

}

export const datacard = async function (model: any, reqbody: any, search_list: string[], sort_by: any) {
    let start: number;
    let length;
    if (typeof reqbody.start === 'undefined') {
        start = 0;
    } else {
        start = parseInt(reqbody.start);
    }
    if (typeof reqbody.length === 'undefined') {
        length = 12;
    } else {
        length = parseInt(reqbody.length);
    }

    if (typeof reqbody.page === 'undefined') {
        start = 0;
    } else {
        const page = parseInt(reqbody.page);
        start = (page * length) - length;
    }
    const search = reqbody.keyword ?? '';
    const where: any = {};
    const countWhere: any = {};

    // Menyiapkan kondisi untuk pencarian
    if (search !== '' && search_list !== null) {
        countWhere.OR = search_list.map((item) => ({[item]: {contains: search, mode: 'insensitive'}}));
        where.OR = [
            ...search_list.map((item) => ({[item]: {contains: search, mode: 'insensitive'}})),
        ];
    }
    // Menyiapkan kondisi untuk sorting
    const orderBy = sort_by;

    const count = await model.count({
        where: countWhere,
    });

    let datas;

    let query;
    try {
        // Menyiapkan query dengan pagination
        if (length >= 1) {
            query = {
                where,
                orderBy: orderBy,
                skip: start,
                take: length,
            }
        } else {
            query = {
                where,
                orderBy,
                skip: start,
            }
        }
        datas = await model.findMany(query);

        // Proses datas sesuai dengan kebutuhan Anda
        const newdata = datas.map((data: any, index: number) => {
            return {
                nomor_urut: start + index + 1,
                ...data,
            };
        });

        return {
            status: 200,
            data: {
                start,
                length,
                recordsTotal: count,
                recordsFiltered: count,
                data: newdata,
            }
        };
    } catch (error) {
        console.log(error)
        return {
            status: 200,
            data: {
                error
            }
        };
    }

}