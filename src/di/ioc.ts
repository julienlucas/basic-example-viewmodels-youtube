import { useState } from "react";
import { asFunction, createContainer } from "awilix";
import { DashboardViewModel } from "@trainingsapp/pages/Dashboard.viewmodel";
import { TrainingCardViewModel } from "@trainingsapp/components/TrainingCard.viewmodel";

export type TrainingCardViewModelProps = {
  useState: typeof useState;
};

const container = createContainer();

container.register({
  //Frameworks
  useState: asFunction(() => useState),

  //ViewModels
  DashboardViewModel: asFunction(DashboardViewModel),
  TrainingCardViewModel: asFunction(TrainingCardViewModel)
});

export default container;
