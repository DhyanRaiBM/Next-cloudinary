export const navLinks = [
    {
      label: "Home",
      route: "/",
      icon: "/assets/icons/home.svg",
    },
    {
      label: "Image Restore",
      route: "/transformations/add/restore",
      icon: "/assets/icons/image.svg",
    },
    {
      label: "Generative Fill",
      route: "/transformations/add/fill",
      icon: "/assets/icons/stars.svg",
    },
    // {
    //   label: "Image Cartoonize",
    //   route: "/transformations/add/cartoonize",
    //   icon: "/assets/icons/stars.svg",
    // },
    // {
    //   label: "Object Recolor",
    //   route: "/transformations/add/recolor",
    //   icon: "/assets/icons/filter.svg",
    // },
    {
      label: "Object Replace",
      route: "/transformations/add/replace",
      icon: "/assets/icons/filter.svg",
    },
  ];
  
  export const transformationTypes = {
    restore: {
      type: "restore",
      title: "Restore Image",
      subTitle: "Refine images by removing noise and imperfections",
      config: { restore: true },
      icon: "image.svg",
    },
    // removeBackground: {
    //   type: "removeBackground",
    //   title: "Background Remove",
    //   subTitle: "Removes the background of the image using AI",
    //   config: { removeBackground: true },
    //   icon: "camera.svg",
    // },
    fill: {
      type: "fill",
      title: "Generative Fill",
      subTitle: "Enhance an image's dimensions using AI outpainting",
      config: { fillBackground: true },
      icon: "stars.svg",
    },
    // remove: {
    //   type: "remove",
    //   title: "Object Remove",
    //   subTitle: "Identify and eliminate objects from images",
    //   config: {
    //     remove: { prompt: "", removeShadow: true, multiple: true },
    //   },
    //   icon: "scan.svg",
    // },
    // recolor: {
    //   type: "recolor",
    //   title: "Object Recolor",
    //   subTitle: "Identify and recolor objects from the image",
    //   config: {
    //     recolor: { prompt: "", to: "", multiple: true },
    //   },
    //   icon: "filter.svg",
    // },
    replace: {
      type: "replace",
      title: "Object Replace",
      subTitle: "Identify and Replace objects from the image",
      config: {
        replace: { from: "", to: "", multiple: true },
      },
      icon: "filter.svg",
    },
  };
  
  export const aspectRatioOptions = {
    "1:1": {
      aspectRatio: "1:1",
      label: "Square (1:1)",
      width: 1000,
      height: 1000,
    },
    "16:9": {
      aspectRatio: "16:9",
      label: "Standard Portrait (16:9)",
      width: 1778,
      height: 1000,
    },
    "9:16": {
      aspectRatio: "9:16",
      label: "Phone Portrait (9:16)",
      width: 1000,
      height: 1778,
    },
  };
  
  export const defaultValues = {
    title: "",
    aspectRatio: "",
    color: "",
    prompt: "",
    publicId: "",
  };
  





