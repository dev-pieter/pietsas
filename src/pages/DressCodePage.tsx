import PinterestBoard from "@/components/PinterestBoard";

const DressCodePage = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="max-w-3xl mx-auto space-y-8">
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Formal Attire</h2>
          <p className="text-muted-foreground">
            We kindly request that guests dress in formal attire suitable for an
            evening wedding celebration. Below are some inspiration images for
            the dress code.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-4">Inspo Board</h3>
          <PinterestBoard
            url="https://za.pinterest.com/saskiadebok/bedrooms"
            height={600}
          />
        </section>
      </div>
    </div>
  );
};

export default DressCodePage;
