import { ContainerMaxW1366, MainButtons, TableTemplate } from "../components";
import { ModalWindow } from "../components/ModalWindow";

export const App = () => {
  return (
    <ContainerMaxW1366 component="main" className="flex-col gap-10">
      <TableTemplate variant="notes" />

      <MainButtons />

      <TableTemplate variant="summary" />

      <ModalWindow />
    </ContainerMaxW1366>
  );
};
