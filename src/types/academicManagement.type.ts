export type TAcademicSemester={
    _id:string,
    name:string,
    year:string,
    code:string,
    startMonth:string,
    endMonth:string,
    createAt?:string,
    updateAt?:string,
    _v?:number
}

export type TAcademicFaculty={
    _id:string,
    name:string,
    createAt?:string,
    updateAt?:string,
    _v?:number
}

export type TAcademicDepartment={
     _id:string,
    name:string,
    academicFaculty:TAcademicFaculty,
    createAt?:string,
    updateAt?:string,
    _v?:number
}