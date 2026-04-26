import { GitBranch } from "lucide-react";
import { Button } from "./ui/button";
import { Github } from "lucide-react";

const Navbar = () => {
  return (
    <div className="flex item-center justify-between p-5 border b">
      <h1>NextStarter</h1>
      <div className="flex gap-4">
        <a href="/product">Product</a>
        <a href="/feature">Feature</a>
        <a href="/get started">Get Started</a>
        <Button variant={"outline"}>
          <Github></Github>GitHub
        </Button>
      </div>
    </div>
  );
};
export { Navbar };
