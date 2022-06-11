export const enum ApiTypes {
  people = 'people',
  planets = 'planets',
  species = 'species',
  starships = 'starships',
  vehicles = 'vehicles',
}

export interface ApiFormat {
  name: string;
  description: string;
  footer: string;
}

export const formatResult = (type: ApiTypes, data: any): ApiFormat => {
  let description = data.description || ''

  switch (type) {
    case ApiTypes.people:
      description = `${data.name} is a ${data.gender}`
      break
    case ApiTypes.planets:
      description = `${data.name} is a ${data.terrain}`
      break
    case ApiTypes.starships:
      description = `${data.name} is a ${data.model}`
      break
    case ApiTypes.vehicles:
      description = `${data.name} is a ${data.model}`
      break
    case ApiTypes.species:
      description = `${data.name} are a ${data.classification}`
      break
    default:
      // Todo: handle error
      throw new Error('Invalid type')
  }

  return {
    name: data?.name,
    description,
    footer: `<a href="${data?.url}" target="_blank">${data?.url}</a>`
  }
}

const apiPath = 'https://swapi.dev/api/'

export default apiPath
