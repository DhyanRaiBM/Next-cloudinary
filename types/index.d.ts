  declare type Transformations = { 
    restore?: boolean;
    fillBackground?: boolean;
    // remove?: {
    //   prompt: string;
    //   removeShadow?: boolean;
    //   multiple?: boolean;
    // };
    // recolor?: {
    //   prompt?: string;
    //   to: string;
    //   multiple?: boolean;
    // };
    replace?: {
      from: string;
      to: string;
    };
    // removeBackground?: boolean;
  };
  
  declare type TransformationTypeKey =
    | "restore"
    | "fill"
    // | "remove"
    // | "recolor"
    // | "removeBackground"
    | "replace";
  
  // ====== URL QUERY PARAMS
  declare type FormUrlQueryParams = {
    searchParams: string;
    key: string;
    value: string | number | null;
  };
  
  declare type UrlQueryParams = {
    params: string;
    key: string;
    value: string | null;
  };

  declare type SearchParamProps = {
    params: { id: string; type: TransformationTypeKey };
    searchParams: { [key: string]: string | string[] | undefined };
  };
  
  
  declare type RemoveUrlQueryParams = {
    searchParams: string;
    keysToRemove: string[];
  };
  
  declare type TransformationFormProps = {
    type: TransformationTypeKey;
    config?: Transformations | null;
  };
  
  declare type TransformedImageProps = {
    image: any;
    type: string;
    title: string;
    transformationConfig: Transformations | null;
    isTransforming: boolean;
    hasDownload?: boolean;
    setIsTransforming?: React.Dispatch<React.SetStateAction<boolean>>;
  };