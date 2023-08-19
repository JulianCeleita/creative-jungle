interface Post {
    userId?:number;
    id:number;
    title: string; 
    body:string;
    onDelete:(id:number)=>void;
  }

  export interface State {
    postList: Post[];
    error: any;
    isLoading: boolean;
  }
  export type PostId = number;
  
  export type Action =
    | { type: "LOADING_NEW_CARDS" }
    | { type: "ADD_NEW_CARDS"; payload: Post[] }
    | { type: "LOADING_FAILED_CARDS"; payload: any }
    | { type: "DELETE_CARD"; payload: PostId };
  