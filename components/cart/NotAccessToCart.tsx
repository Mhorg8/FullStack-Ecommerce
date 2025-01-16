import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Logo from "../header/Logo";
import { SignInButton } from "@clerk/nextjs";
import { Button } from "../ui/button";

const NotAccessToCart = () => {
  return (
    <div className="flex items-center justify-center py-10 md:py-32 bg-gray-100 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <div className="flex justify-center">
            <Logo text="Tulus" />
          </div>
          <CardTitle className="text-2xl font-bold text-center">
            Welcome Back!
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Log in to view your cary items and checkout. Don&aps;t miss out on
            your favorite
          </p>
          <SignInButton mode="modal">
            <Button className="w-full font-semibold" size="lg">
              Sign in
            </Button>
          </SignInButton>
        </CardContent>
        <CardFooter className="flex flex-col gap-2">
          <p>Don&apos;t have an account? </p>
          <SignInButton mode="modal">
            <Button variant="outline" className="w-full" size="lg">
              Create an account
            </Button>
          </SignInButton>
        </CardFooter>
      </Card>
    </div>
  );
};

export default NotAccessToCart;
