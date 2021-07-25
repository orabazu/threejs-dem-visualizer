# threejs-dem-visualizer

![A GIF file showing a preview of the starter project](https://github.com/zhunor/threejs-dem-visualizer/blob/master/preview.gif "Mouth Ağrı, modeled from USGS's digital elevation model and satellite image data")


### Blog Post: 
https://medium.com/@zubazor/visualizing-a-mountain-using-three-js-landsat-and-srtm-26275c920e34

### Features :

* DEM(Digital Elevation Model) and satellite image data is downloaded from [USGS](https://earthexplorer.usgs.gov/) 
* ASTER and LANDSAT satellite's data is used.
* Geotiff files generated using QGIS [QGIS](https://qgis.org/tr/site/)

 
### Installation

```
git clone git@github.com:zhunor/threejs-geotiff-visualizer.git
cd threejs-geotiff-visualizer

yarn install
```

### Usage

Generate all js/css bundles

```
yarn build
```

Run `webpack-dev-server` (all bundles will be served from memory)

```
yarn start
```


Go to `localhost:8080` to see your project live!


### Credits

Skeleton of the code is built on https://github.com/jackdbd/threejs-es6-webpack-starter project. I added some css for loading since reading geotiff files take time. If you have problems on build better to follow original instructions.

Demo of [jonathanlurie](https://github.com/jonathanlurie/ThreejsDEM) and [mapmasters] (http://blog.mastermaps.com/2013/10/terrain-building-with-threejs.html) were realy helpfull to understand the logic of DEM to three.js convertion


