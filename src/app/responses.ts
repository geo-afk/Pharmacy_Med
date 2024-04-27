export class Responses {
  constructor(
    public Name: string,
    public Age: number,
    public Allergic: string,
    public Symptoms: string,
    public Response: string
  ) {}

  static someTestData(): Responses[] {
    return [
      new Responses(
        'John Smith',
        35,
        'Penicillin',
        'Fever, sore throat, cough',
        "Considering the symptoms described, it's plausible that you're experiencing a viral infection, such as influenza. " +
          "It's important to refrain from consuming medications containing penicillin, as they may not be effective against viral infections. " +
          'Hydration and ample rest are crucial; therefore, ensure you drink plenty of fluids and prioritize rest. ' +
          'However, should your symptoms exacerbate or persist, it is strongly advised to seek guidance from a healthcare professional promptly.' +
          'Please note that this recommendation is based solely on the information provided and does not substitute for professional medical advice. ' +
          "It's imperative to consult with a qualified healthcare provider for a thorough evaluation and personalized treatment plan tailored to your specific condition."
      ),
      new Responses(
        'Sarah Johnson',
        45,
        'Sulfa drugs',
        'Rash, itching, difficulty breathing',
        'Your symptoms could indicate an allergic reaction, especially considering your allergy to sulfa drugs.' +
          'Please seek immediate medical attention as these symptoms could be serious.' +
          'Avoid any medications containing sulfa drugs and inform healthcare providers of your allergy.'
      ),
      new Responses(
        'Emily Brown',
        25,
        'None',
        'Severe abdominal pain, nausea, vomiting',
        'Your symptoms could indicate a variety of conditions, including gastritis, appendicitis, or gastroenteritis. ' +
          "It's essential to seek medical attention promptly to determine the cause and receive appropriate treatment. " +
          "Avoid taking any over-the-counter medications until you've been evaluated by a healthcare professional."
      ),
      new Responses(
        'Michael Lee',
        25,
        'Aspirin',
        'Chest pain, shortness of breath',
        "Given your symptoms, it's crucial to consider the possibility of a heart-related issue such as angina or a heart attack, especially considering your allergy to aspirin." +
          ' Please seek immediate medical attention by calling emergency services or visiting the nearest emergency room.' +
          ' Do not take aspirin or any other medication without consulting a healthcare professional.'
      ),
    ];
  }
}
