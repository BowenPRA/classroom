// content/y7-science/U03_models/index.js
// A lesson module: default-exports { meta, slides, plan }. The registry
// auto-discovers this file (content/<course>/<unit>/index.js).
//
// A Unit 3 modelling deck that pulls 3.1–3.3 together and goes further
// (order 17.5 puts it straight after 3.3 Movement in Space). Four parts, about four
// periods: the Solar System as a working scale model; how it formed (the
// nebula model); half-life and carbon dating, told through Mr Bowen and his
// coffee; and how we know the ages of the Earth and the Sun. English and
// French only, like every Year 7 deck from 15 October.
import { slides } from './slides.js'
import { plan } from './plan.js'

export default {
  meta: {
    course: 'y7-science',
    unit: 'Models',
    id: 'U03_MODELS',
    title: 'Models: Space and Time',
    subtitle: 'The Solar System to scale, how it formed, and how we know how old things are',
    objective:
      'Explain what a model is and name its limitations; describe the sizes and distances in the Solar System with a ' +
      'scale model, and that the planets orbit the same way in almost one flat plane; describe how the Solar System ' +
      'formed from a spinning nebula; use half-life to find what is left; explain carbon dating and its limits; and ' +
      'explain how radioactive dating, meteorites and a model Sun give the ages of the Earth and the Sun.',
    order: 17.5,
    french: true,
    vietnamese: false,
  },
  slides,
  plan,
}
