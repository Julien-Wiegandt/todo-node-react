import React from "react";

interface ITask {
  id: number;
  title: string;
  done: boolean;
}

export interface ITaskPayload {
  title: string;
  done: boolean;
}

export default ITask;
