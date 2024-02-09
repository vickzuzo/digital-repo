import { Button, buttonVariants } from "@digital-repo/components/ui/button";
import { MaxWidthWrapper } from "@digital-repo/components/wrappers";
import { ArrowDownToLine, CheckCircle, Leaf } from "lucide-react";
import Link from "next/link";

const perks = [
  {
    name: "Instant Delivery",
    icon: ArrowDownToLine,
    description:
      "Get your assets delivered to your email in seconds and download them instantly.",
  },
  {
    name: "Guaranteed Quality",
    icon: CheckCircle,
    description:
      "Every asset on our platform is verified by our team to ensure our highest quality standards. Not happy?, we offer a 30-day refund gurantee.",
  },
  {
    name: "For the planet",
    icon: Leaf,
    description:
      "We've pledged 1% of sales to the preservation and restoration of the natural environment.",
  },
];

export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl min-h-[50vh] justify-center">
          <h1 className="text-6xl font-bold tracking-tight text-gray-900">
            Your Marketplace for High-Quality{" "}
            <span className="text-violet-600">Digital Assets</span>
          </h1>
          <p className="mt-6 text-lg max-w-prose text-muted-foreground">
            Welcome to DigitalRepo. Every Assets on our platform is verified by
            our team to ensure our high quality standards.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link
              href="/products"
              className={buttonVariants({ className: "px-10" })}
            >
              Browse Trending
            </Link>
            <Button variant="ghost">Our quality promise &arr;</Button>
          </div>
        </div>
        {/* TODO: {LIST PRODUCTS} */}
      </MaxWidthWrapper>
      <section className="border-t border-gray-200 bg-gray-50">
        <MaxWidthWrapper className="py-20">
          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
            {perks.map((perk) => (
              <div
                key={perk.name}
                className="text-center md:flex md:items-start md:text-left lg:block lg:text-center"
              >
                <div className="md:flex-shrink-0 flex justify-center">
                  <div className="h-16 w-16 flex items-center justify-center rounded-full bg-violet-100 text-violet-900">
                    <perk.icon className="w-1/3 h-1/3" />
                  </div>
                </div>
                <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {perk.name}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground">
                    {perk.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
}
