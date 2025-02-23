import assert from "assert";
import { 
  TestHelpers,
  Bidding_LaunchPending
} from "generated";
const { MockDb, Bidding } = TestHelpers;

describe("Bidding contract LaunchPending event tests", () => {
  // Create mock db
  const mockDb = MockDb.createMockDb();

  // Creating mock for Bidding contract LaunchPending event
  const event = Bidding.LaunchPending.createMockEvent({/* It mocks event fields with default values. You can overwrite them if you need */});

  it("Bidding_LaunchPending is created correctly", async () => {
    // Processing the event
    const mockDbUpdated = await Bidding.LaunchPending.processEvent({
      event,
      mockDb,
    });

    // Getting the actual entity from the mock database
    let actualBiddingLaunchPending = mockDbUpdated.entities.Bidding_LaunchPending.get(
      `${event.chainId}_${event.block.number}_${event.logIndex}`
    );

    // Creating the expected entity
    const expectedBiddingLaunchPending: Bidding_LaunchPending = {
      id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
      token: event.params.token,
    };
    // Asserting that the entity in the mock database is the same as the expected entity
    assert.deepEqual(actualBiddingLaunchPending, expectedBiddingLaunchPending, "Actual BiddingLaunchPending should be the same as the expectedBiddingLaunchPending");
  });
});
