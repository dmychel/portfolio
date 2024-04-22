export function setLocal(project) {
    return localStorage.setItem('project', JSON.stringify(project));
}

