/*
 * Please refer to https://docs.envio.dev for a thorough guide on all Envio indexer features
 */
import {
  Bidding,
  Bidding_Poolstate,
  Bidding_PriceChanged,
} from "generated";

// Bidding.LaunchPending.handler(async ({ event, context }) => {
//   const entity: Bidding_LaunchPending = {
//     id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
//     token: event.params.token,
//   };
//

//   context.Bidding_LaunchPending.set(entity);
// });

// Bidding.LauncherChanged.handler(async ({ event, context }) => {
//   const entity: Bidding_LauncherChanged = {
//     id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
//     oldLauncher: event.params.oldLauncher,
//     newLauncher: event.params.newLauncher,
//   };

//   context.Bidding_LauncherChanged.set(entity);
// });

// Bidding.OwnerChanged.handler(async ({ event, context }) => {
//   const entity: Bidding_OwnerChanged = {
//     id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
//     oldOwner: event.params.oldOwner,
//     newOwner: event.params.newOwner,
//   };

//   context.Bidding_OwnerChanged.set(entity);
// });

// Bidding.PendingOwnerSet.handler(async ({ event, context }) => {
//   const entity: Bidding_PendingOwnerSet = {
//     id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
//     oldPendingOwner: event.params.oldPendingOwner,
//     newPendingOwner: event.params.newPendingOwner,
//   };

//   context.Bidding_PendingOwnerSet.set(entity);
// });

Bidding.Poolstate.handler(async ({ event, context }) => {
  const entity: Bidding_Poolstate = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    token: event.params.token,
    eTHResever: event.params.ETHResever,
    tokenReserve: event.params.tokenReserve,
    timestamp: event.block.timestamp
  };

  context.Bidding_Poolstate.set(entity);
});

Bidding.PriceChanged.handler(async ({ event, context }) => {
  const entity: Bidding_PriceChanged = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    token: event.params.token,
    newPrice: event.params.newPrice,
    circulatingSupply: event.params.circulatingSupply,
    timestamp: event.block.timestamp
  };

  context.Bidding_PriceChanged.set(entity);
});

// Bidding.TokenCreate.handler(async ({ event, context }) => {
//   const entity: Bidding_TokenCreate = {
//     id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
//     tokenAddress: event.params.tokenAddress,
//     tokenIndex: event.params.tokenIndex,
//     creator: event.params.creator,
//   };

//   context.Bidding_TokenCreate.set(entity);
// });

// Bidding.TokenLaunched.handler(async ({ event, context }) => {
//   const entity: Bidding_TokenLaunched = {
//     id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
//     token: event.params.token,
//   };

//   context.Bidding_TokenLaunched.set(entity);
// });

// Bidding.TokenPurchased.handler(async ({ event, context }) => {
//   const entity: Bidding_TokenPurchased = {
//     id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
//     token: event.params.token,
//     buyer: event.params.buyer,
//     ethAmount: event.params.ethAmount,
//     tokenAmount: event.params.tokenAmount,
//     tokenReserve: event.params.tokenReserve,
//   };

//   context.Bidding_TokenPurchased.set(entity);
// });

// Bidding.TokenSold.handler(async ({ event, context }) => {
//   const entity: Bidding_TokenSold = {
//     id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
//     token: event.params.token,
//     seller: event.params.seller,
//     ethAmount: event.params.ethAmount,
//     tokenAmount: event.params.tokenAmount,
//   };

//   context.Bidding_TokenSold.set(entity);
// });
