import EditBrand from "@/app/components/brand/edit-brand";
import Breadcrumb from "../../components/breadcrumb/breadcrumb";
import Wrapper from "@/layout/wrapper";

const Test = ({ params }: { params: { id: string } }) => {
  return (
    <Wrapper>
      <div className="body-content px-8 py-8 bg-slate-100">
        {/* breadcrumb start */}
        <Breadcrumb title="Test" subtitle="Test" />
        {/* breadcrumb end */}

        {/*add category area start */}
        <EditBrand id={params.id} />
        {/*add category area end */}
      </div>
    </Wrapper>
  );
};

export default Test;