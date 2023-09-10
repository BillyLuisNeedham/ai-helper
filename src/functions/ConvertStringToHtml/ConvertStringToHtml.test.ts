import { convertStringToHtml } from "./ConvertStringToHtml";

describe('convertStringToHtml', () => {

    // Test that the function 'convertStringToHtml' returns the input string unchanged when there are no line breaks
    it('should return the input string unchanged when there are no line breaks', () => {
      // Arrange
      const input = "This is a test string";
  
      // Act
      const result = convertStringToHtml(input);
  
      // Assert
      expect(result).toBe(input);
    });


    // Test that the function 'convertStringToHtml' replaces single line breaks with "<br />" tag
    it('should replace single line breaks with "<br />" tag when there are line breaks', () => {
      // Arrange
      const input = "This is a test\nstring";

      // Act
      const result = convertStringToHtml(input);

      // Assert
      expect(result).toBe("This is a test<br />string");
    });


});
