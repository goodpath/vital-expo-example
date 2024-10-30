import { VitalCore } from "@tryvital/vital-core-react-native";
import {
  HealthConfig,
  VitalHealth,
  VitalResource,
} from "@tryvital/vital-health-react-native";
import { Alert } from "react-native";

let configured = false;

export const vitalLogin = async () => {
  const apiKey = process.env.EXPO_PUBLIC_VITAL_API_KEY || "";
  const environment = process.env.EXPO_PUBLIC_VITAL_ENVIRONMENT || "production";
  const country = process.env.EXPO_PUBLIC_VITAL_COUNTRY || "us";
  const userId = process.env.EXPO_PUBLIC_VITAL_USER_ID || "";

  console.log("vitalLogin");

  if (!configured) {
    console.log("Configuring vital SDK with API Key:", apiKey);
    await VitalCore.configure(apiKey, environment, country, true);

    console.log("Configuring vital Health SDK");
    const config = new HealthConfig();
    config.iOSConfig.backgroundDeliveryEnabled = true;
    await VitalHealth.configure(config);

    configured = true;
  }

  console.log("Setting userId:", userId);
  VitalCore.setUserId(userId);
};

export const vitalPermissionRequest = async () => {
  console.log("vitalPermissionRequest");

  const hasAskedForActivityPermission = await VitalHealth.hasAskedForPermission(
    VitalResource.Activity
  );
  const hasAskedForWorkoutPermission = await VitalHealth.hasAskedForPermission(
    VitalResource.Workout
  );
  const hasAskedForAllPermissions =
    hasAskedForActivityPermission && hasAskedForWorkoutPermission;

  if (hasAskedForAllPermissions) {
    Alert.alert("Permissions already requested");
  } else {
    console.log("Requesting permissions");
    await VitalHealth.ask([VitalResource.Activity, VitalResource.Workout], []);
  }
};
