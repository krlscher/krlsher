declare module "photoswipe-video-plugin" {
  export default class PhotoSwipeVideoPlugin {
    constructor(
      lightbox: unknown,
      options?: {
        videoAttributes?: Record<string, string>;
        autoplay?: boolean;
        preventDragOffset?: number;
      },
    );
  }
}
