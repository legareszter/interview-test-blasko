import React, { useEffect } from "react";
import data from "./data.json";

type Kpis = {
  "averageEmptyDistanceKpis": {
    "global": {
      "accepted": number;
      "all": number;
    },
    "filtered": {
      "accepted": number;
      "all": number;
    }
  },
  "averageWaitingTimeKpis": {
    "global": {
      "accepted": number;
      "all": number;
    },
    "filtered": {
      "accepted": number;
      "all": number;
    }
  },
  "numberOfAssignmentsKpis": {
    "global": {
      "accepted": number;
      "notAccepted": number;
    },
    "filtered": {
      "accepted": number;
      "notAccepted": number;
    }
  }
};

type ConvertedKpis = {
  "averageEmptyDistanceKpis": {
    "global": {
      "accepted": number;
      "all": number;
    },
    "filtered": string[];
  },
  "averageWaitingTimeKpis": {
    "global": {
      "accepted": number;
      "all": number;
    },
    "filtered": string[];
  },
  "numberOfAssignmentsKpis": {
    "global": {
      "accepted": number;
      "notAccepted": number;
    },
    "filtered": string[];
  }
};

const ReverseEngineeringTask: React.FC = () => {

  useEffect(()=>{
    const newData = (data: Kpis) => {
      console.log(data);
      const newobj = Object.entries(data).reduce((acc, [key, value]) => {
        const newvalue = { ...value };
        newvalue.global.accepted += 1;
        newvalue.global.all -= 1;
        newvalue.filtered = Object.keys(value.filtered);
        acc[key] = newvalue;
        return acc;
      }, {} as ConvertedKpis);
      return newobj;
    };

    console.log(newData(data));
  }, [])

  return <span>Check your console for the result</span>
}

export default ReverseEngineeringTask;
