import { ArrowLeft } from "lucide-react";
import { data, Link } from "react-router";

import { Button } from "@/components/ui/button";

export function meta() {
  return [{ title: "404 | hironeko" }];
}

export function loader() {
  return data(null, { status: 404 });
}

export default function NotFound() {
  return (
    <main className="relative grid min-h-svh place-items-center overflow-hidden px-6 text-center">
      <div className="orb orb-one" />
      <div className="glass-card relative z-10 max-w-xl rounded-[2rem] p-10 md:p-16">
        <p className="text-sm font-bold tracking-[0.2em] text-primary uppercase">404</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
          このページはありません。
        </h1>
        <p className="mt-5 leading-8 text-muted-foreground">
          ブログを含む旧ページは整理しました。現在のプロフィールはトップページにまとめています。
        </p>
        <Button asChild size="lg" className="mt-8">
          <Link to="/">
            <ArrowLeft aria-hidden="true" />
            トップへ戻る
          </Link>
        </Button>
      </div>
    </main>
  );
}
