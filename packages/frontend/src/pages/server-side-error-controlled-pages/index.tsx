import { OneBoxLayout } from "src/components/layout/OneBoxLayout";
import PageLayout from "src/components/layout/PageLayout";

const WrappedPruebaPage = () => (
    <PageLayout>
        <OneBoxLayout pageName="Old pages api">
            <div>
                <h3>Old pages api</h3>
                <p>{`Old pages api.`}</p>
            </div>
        </OneBoxLayout>
    </PageLayout>
);

export default WrappedPruebaPage;
