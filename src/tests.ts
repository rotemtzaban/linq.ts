// interface RasterLayer extends ILayer {
//     type: 'raster';
//     raster: number;
// }

// interface VectorLayer {
//     type: 'vector';
//     vector: number;
// }

// interface LayerTypes {
//     vector: VectorLayer;
//     raster: RasterLayer;
// }

// interface Renderer {
//     renderers: { [key in keyof LayerTypes]: (layer: LayerTypes[key]) => void };
//     getRenderer<T extends keyof LayerTypes>(this:Renderer,key:T):(layer:LayerTypes[T]) => void;
// }

// let r: Renderer = {
//     getRenderer:function f<T extends keyof LayerTypes>(this:Renderer,key:T){
//         const x = this.renderers[key];
//         return x;
//     },
//     renderers: {
//         raster: layer => {
//             return;
//         },
//         vector: layer => {
//             return;
//         },
//     },
// };

// let l: ILayer = GetLayer();
// let r2 = r.renderers[l.type] as (layer:ILayer) => void;

// function GetLayer() {
//     return (null as any) as ILayer;
// }
// interface ILayer {
//     type: keyof LayerTypes;
// }

// interface VideoLayer {
//     video: number;
// }

interface IRenderer {
    getVideoRenderer(): ILayerRenderer<VideoLayer>;
    getVectorRenderer(): ILayerRenderer<VectorLayer>;
}

class VectorLayer implements ILayer {
    public getRenderer<TRenderer extends IRenderer>(
        renderer: TRenderer
    ): ILayerRenderer<this> {
        return renderer.getVectorRenderer();
    }
}

// tslint:disable-next-line:max-classes-per-file
class VectorLayerRenderer implements ILayerRenderer<VectorLayer> {
    /**
     *
     */
    constructor(private readonly renderer: IRenderer) {}
    public renderLayer(layer: VectorLayer): void {
        return;
    }
}

interface ILayer {
    getRenderer<TRenderer extends IRenderer>(renderer: TRenderer): ILayerRenderer<this>;
}

// tslint:disable-next-line:max-classes-per-file
class VideoLayer implements ILayer {
    public getRenderer<TRenderer extends IRenderer>(
        renderer: TRenderer
    ): ILayerRenderer<this> {
        return renderer.getVideoRenderer();
    }
}

// tslint:disable-next-line:max-classes-per-file
class Renderer implements IRenderer {
    private readonly vectorLayerRenderer = new VectorLayerRenderer(this);
    public getVectorRenderer(): ILayerRenderer<VectorLayer> {
        return this.vectorLayerRenderer;
    }
    public getVideoRenderer(): ILayerRenderer<VideoLayer> {
        return new VideoRenderer(this);
    }

    public renderLayer(layer: ILayer) {
        layer.getRenderer(this).renderLayer(layer);
    }
}
// tslint:disable-next-line:max-classes-per-file
class VideoRenderer implements ILayerRenderer<VideoLayer> {
    /**
     *
     */
    constructor(private readonly renderer: Renderer) {}
    public renderLayer(layer: VideoLayer): void {
        return;
    }
}

interface ILayerRenderer<TLayer extends ILayer> {
    renderLayer(layer: TLayer): void;
}

interface Array<T>{
    shit:number;
}