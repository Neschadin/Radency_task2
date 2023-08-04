import { ContainerMaxW1366, MainButtons, TableTemplate } from "../components";

export const App = () => {
  return (
    <ContainerMaxW1366 component="main" className="flex-col gap-10">
      <TableTemplate variant="notes" />

      <MainButtons />

      <TableTemplate variant="summary" />
    </ContainerMaxW1366>
  );
};
