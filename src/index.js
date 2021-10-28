import { Excel } from "@/components/Excel";
import { Header } from "@/components/Header";
import { Toolbar } from "@/components/Toolbar";
import { Formula } from "@/components/Formula";
import { Table } from "@/components/table/Table";
import { createStore } from "@core/createStore";
import { rootReducer } from "@/redux/rootReducer";
import { storage } from "@core/utils";
import { initialState } from "@/redux/initialState";
import "@/scss/index.scss";

const store = createStore(rootReducer, initialState);

store.subscribe((state) => {
  storage("excel-state", state);
});

const excel = new Excel("#app", {
  components: [Header, Toolbar, Formula, Table],
  store,
});

excel.render();
