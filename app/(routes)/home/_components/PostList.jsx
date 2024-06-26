import React from "react";
import PostItem from "./PostItem";
import { Skeleton } from "@/components/ui/skeleton";

const PostList = ({ postList, updatePostList }) => {
  return (
    <div>
      {postList ? (
        postList.map((item, index) => (
          <div key={index}>
            <PostItem post={item} updatePostList={() => updatePostList()}/>
          </div>
        ))
      ) : (
        <div>
          {[1, 2, 3].map((item, index) => (
            <Skeleton className="h-[200px] w-full bg-slate-200 animate-pulse my-5" />
          ))}
        </div>
      )}
    </div>
  );
};

export default PostList;
