import { getWelcomeMessage } from "./WelcomeMessage";

describe('getWelcomeMessage', () => {

    // Returns a welcome message from the given array of messages.
    it('should return a welcome message from the given array of messages', () => {
      const messages = ['Hello', 'Hi', 'Welcome'];
      const result = getWelcomeMessage(messages);
      expect(messages).toContain(result);
    });


});
