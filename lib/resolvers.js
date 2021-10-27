'use strict'

const courses = [
    {
        _id: 'anyID',
        title: 'Mi titulo',
        teacher: 'Mi Profesor',
        description: 'Una Descripcion',
        topic: 'Programacion'
    },
    {
        _id: 'anyID1',
        title: 'Mi titulo1',
        teacher: 'Mi Profesor1',
        description: 'Una Descripcion1',
        topic: 'Programacion1'
    },
    {
        _id: 'anyID2',
        title: 'Mi titulo2',
        teacher: 'Mi Profesor2',
        description: 'Una Descripcion2',
        topic: 'Programacion2'
        }
]


module.exports = {
    Query:{
    getCourses: () => {
        return courses
    },
    getCourse: (root, args) => {
        const course = courses.filter(course => course._id === args.id)
        return course.pop()
    }
}
}