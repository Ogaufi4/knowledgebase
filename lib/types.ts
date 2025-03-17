export interface Message {
    /**
      A unique identifier for the message.
       */
    id: string;
    /**
      The timestamp of the message.
       */
    createdAt?: Date;
    /**
      Text content of the message. Use parts when possible.
       */
    content: string;
    /**
      The 'data' role is deprecated.
       */
    role: "system" | "user" | "assistant";
    /**
     * The parts of the message. Use this for rendering the message in the UI.
     *
     * Assistant messages can have text, reasoning and tool invocation parts.
     * User messages can have text parts.
     */
    // note: optional on the Message type (which serves as input)
    parts?: Array<TextUIPart>;
  }
  /**
   * A text part of a message.
   */
  export type TextUIPart = {
    type: "text";
    /**
     * The text content.
     */
    text: string;
  };

  export interface ArtifactType {
    key: string
    name: string
  }

  export interface CategoryType {
    key: string
    name: string
  }
