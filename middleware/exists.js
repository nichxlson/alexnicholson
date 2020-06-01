export default function({ store, route, error }) {
    const project = store.getters.getProjectBySlug(route.params.slug) ;

    if(!project) {
        return error({ statusCode: 404, message: 'Project not found' })
    }
}
