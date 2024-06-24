"use client";
import Image from "next/image";
import { useEffect } from "react";
import GlobalApi from "./_utils/GlobalApi";
import { useUser } from "@clerk/nextjs";
import { imageConfigDefault } from "next/dist/shared/lib/image-config";

export default function Home() {
  const { user } = useUser();

  useEffect(() => {
    user && createUserProfile();
  }, [user]);

  const createUserProfile = () => {
    if (!localStorage.getItem('isLogin')) {
      const data = {
        name: user.fullName,
        email: user.primaryEmailAddress.emailAddress,
        image: user.imageUrl,
      };
      GlobalApi.createUser(data).then((resp) => {
        console.log(resp.data);
        localStorage.setItem('isLogin', true);
      });
    }
  };
  return <div></div>;
}
