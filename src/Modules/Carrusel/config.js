/**
 * Types
 *
 * Object
 *  - props
 *  - displayName
 *
 * Repeater
 * - min
 * - max
 * - defaultChild
 * - childs
 * - displayname
 *
 * Image, Link, Text, Color
 *
 * - displayName
 * - value
 *
 * Enum
 *
 * - displayName
 * - value
 * - options
 */

const config = {
  id: 'Slider',
  blocks: [
    {
      type: 'Repeater',
      displayName: 'Default Slide',
      min: 1,
      max: 4,
      defaultChild: [
        {
          type: 'Object',
          displayName: 'Slide',
          props: [
            {
              type: 'Image',
              displayname: 'Imagen para mostrar',
              value: '',
            },
            {
              type: 'Link',
              displayname: 'Link de la pagina a visitar',
              value: '',
            },
            {
              type: 'Enum',
              displayName: 'Tipo de elemento',
              value: 'Image',
              options: ['Image', 'Video'],
            },
          ],
        },
      ],
      childs: [
        {
          type: 'Object',
          displayName: 'Slide',
          props: [
            {
              type: 'Image',
              displayname: 'Imagen para mostrar',
              value:
                'https://images-na.ssl-images-amazon.com/images/G/33/img19/HappySchool2019/HSY_V2_3000x1200._CB439546195_.jpg',
            },
            {
              type: 'Link',
              displayname: 'Link de la pagina a visitar',
              value: 'https://www.elektra.com.mx/electronica/tv-y-video/pantallas',
            },
            {
              type: 'Enum',
              displayName: 'Tipo de elemento',
              value: 'Image',
              options: ['Image', 'Video'],
            },
          ],
        },
        {
          type: 'Object',
          displayName: 'Slide',
          props: [
            {
              type: 'Image',
              displayname: 'Imagen para mostrar',
              value:
                'https://www.victoriassecret.com/videos/vsweb/660127f2-7ae4-4bec-82e2-732631533758/080819-home-fall-collection-ftr.mp4',
            },
            {
              type: 'Link',
              displayname: 'Link de la pagina a visitar',
              value: 'https://www.elektra.com.mx/electronica/tv-y-video/drones',
            },
            {
              type: 'Enum',
              displayName: 'Tipo de elemento',
              value: 'Video',
              options: ['Image', 'Video'],
            },
          ],
        },
        {
          type: 'Object',
          displayName: 'Slide',
          props: [
            {
              type: 'Image',
              displayname: 'Imagen para mostrar',
              value:
                'https://images-na.ssl-images-amazon.com/images/G/33/kindle/journeys/MTMwZWE4M2Ut-NjQ4NGI3YzIt-w3000._CB438398551_.jpg',
            },
            {
              type: 'Link',
              displayname: 'Link de la pagina a visitar',
              value: 'https://www.elektra.com.mx/motos/motocicletas/trabajo',
            },
            {
              type: 'Enum',
              displayName: 'Tipo de elemento',
              value: 'Image',
              options: ['Image', 'Video'],
            },
          ],
        },
      ],
    },
  ],
};

export default config;
