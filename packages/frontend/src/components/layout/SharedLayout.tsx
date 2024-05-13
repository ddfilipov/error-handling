import { FC } from "react";

import { PagesMainArea } from "../PagesMainArea";
import { DataViewer } from "../DataViewer";
import { InteractiveComponent } from "../InteractiveComponent";

import { Company } from "@common/types";

interface SharedLayoutProps {
    pageName: string;
    data: Company;
}

export const SharedLayout: FC<SharedLayoutProps> = ({ data, pageName }) => {
    return (
        <PagesMainArea pageName={pageName}>
            <DataViewer data={data} />
            <InteractiveComponent data={data} />
        </PagesMainArea>
    );
};
