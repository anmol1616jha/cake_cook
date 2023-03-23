import { Dimensions } from 'react-native'
const {width , height} = Dimensions.get('window')

export default{
     // global sizes
     base: 8,
     font: 14,
     radius: 12,
     padding: 24,
     margin: 20,

 
     // font sizes
     largeTitle: 40,
     h1: 30,
     h2: 22,
     h3: 16,
     h4: 14,
     h5: 12,
     body1: 30,
     body2: 22,
     body3: 16,
     body4: 14,
     body5: 12,
 
    // font weight
    light : 400,
    regular : 500,
    bold: 700,

     // app dimensions
     width,
     height,

     // Common sizes
     logoSize:50,
     headerLogo:40,

     // Image sizes
     imageHeight: 400,
     imageWidth: 400,
     imageSize: 2000000
}