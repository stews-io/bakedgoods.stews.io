import { SourceStewConfig } from "stew/config";
import { musicDataset } from "./music.dataset.ts";

export default getStewConfig();

function getStewConfig(): SourceStewConfig {
  return {
    stewInfo: {
      stewName: "bakedgoods",
      stewTagline: "sandy eggo",
      stewMessage: "choice selections from modern electronic music",
      stewExternalLinks: [],
    },
    stewSegments: [
      {
        segmentDataset: musicDataset,
        segmentModulePath: "./music.module.ts",
        segmentKey: "music",
        segmentLabel: "music",
        segmentViews: [
          {
            viewKey: "all",
            viewLabel: "all",
            viewItemIds: musicDataset.map(
              (someMusicItem) => someMusicItem.itemId
            ),
          },
          {
            viewKey: "albums",
            viewLabel: "albums",
            viewItemIds: musicDataset.reduce<Array<number>>(
              (viewItemsIdsResult, someMusicItem) => {
                if (
                  someMusicItem.sourceType === "collection" &&
                  (someMusicItem.collectionType === "album" ||
                    someMusicItem.collectionType === "ep")
                ) {
                  viewItemsIdsResult.push(someMusicItem.itemId);
                }
                return viewItemsIdsResult;
              },
              []
            ),
          },
          {
            viewKey: "albums",
            viewLabel: "albums",
            viewItemIds: musicDataset.reduce<Array<number>>(
              (viewItemsIdsResult, someMusicItem) => {
                if (
                  someMusicItem.sourceType === "collection" &&
                  (someMusicItem.collectionType === "album" ||
                    someMusicItem.collectionType === "ep")
                ) {
                  viewItemsIdsResult.push(someMusicItem.itemId);
                }
                return viewItemsIdsResult;
              },
              []
            ),
          },
          {
            viewKey: "studiomixes",
            viewLabel: "studio mixes",
            viewItemIds: musicDataset.reduce<Array<number>>(
              (viewItemsIdsResult, someMusicItem) => {
                if (
                  someMusicItem.sourceType === "mix" &&
                  someMusicItem.recordingContext.findIndex(
                    (someRecordingItem) => someRecordingItem === "studio"
                  ) >= 0
                ) {
                  viewItemsIdsResult.push(someMusicItem.itemId);
                }
                return viewItemsIdsResult;
              },
              []
            ),
          },
          {
            viewKey: "livesets",
            viewLabel: "live sets",
            viewItemIds: musicDataset.reduce<Array<number>>(
              (viewItemsIdsResult, someMusicItem) => {
                if (
                  someMusicItem.sourceType === "mix" &&
                  someMusicItem.recordingContext.findIndex(
                    (someRecordingItem) => someRecordingItem === "concert"
                  ) >= 0
                ) {
                  viewItemsIdsResult.push(someMusicItem.itemId);
                }
                return viewItemsIdsResult;
              },
              []
            ),
          },
        ],
      },
    ],
  };
}
