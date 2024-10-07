import React, { useState } from 'react'
import { Database, Cpu, LineChart, Zap, ArrowRight, Heart, Stethoscope, Brain, Activity } from 'lucide-react'

const steps = [
  {
    icon: Database,
    title: 'Deepsyn Telehealth Data Preparation',
    description: 'Prepare and preprocess Deepsyn Telehealth patient data for the DeepHyper optimization process.',
    details: [
      'Collect and anonymize patient data from Deepsyn Telehealth consultations',
      'Clean and normalize vital signs, symptoms, and medical history data',
      'Handle missing values and outliers in patient records',
      'Perform feature engineering to create relevant health indicators'
    ]
  },
  {
    icon: Cpu,
    title: 'Model Search Space Definition',
    description: 'Define the hyperparameter search space for the Deepsyn Telehealth prediction model.',
    details: [
      'Identify relevant hyperparameters for the patient outcome prediction model',
      'Specify ranges for learning rate, network architecture, and regularization',
      'Define categorical parameters for different feature selection methods',
      'Set constraints to ensure model complexity aligns with available Deepsyn Telehealth data'
    ]
  },
  {
    icon: LineChart,
    title: 'DeepHyper Optimization',
    description: 'Use DeepHyper to optimize the Deepsyn Telehealth prediction model hyperparameters.',
    details: [
      'Configure DeepHyper to use Bayesian optimization for efficient search',
      'Define an objective function based on prediction accuracy and model efficiency',
      'Execute the optimization process on a distributed computing environment',
      'Monitor the optimization progress and intermediate model performances'
    ]
  },
  {
    icon: Zap,
    title: 'Optimal Deepsyn Telehealth Model',
    description: 'Implement and deploy the best Deepsyn Telehealth prediction model configuration.',
    details: [
      'Select the top-performing model based on prediction accuracy and efficiency',
      'Validate the model using a separate set of Deepsyn Telehealth patient data',
      'Integrate the optimized model into the Deepsyn Telehealth application\'s backend',
      'Set up continuous monitoring and periodic re-optimization of the model'
    ]
  },
]

const deepsynTelehealthBenefits = [
  { icon: Heart, title: 'Improved Patient Outcomes', description: 'Optimized models lead to more accurate predictions and better patient care in Deepsyn Telehealth.' },
  { icon: Stethoscope, title: 'Efficient Diagnoses', description: 'DeepHyper-tuned models can quickly identify potential health issues from Deepsyn Telehealth data.' },
  { icon: Brain, title: 'Personalized Treatment', description: 'Optimized algorithms can suggest personalized treatment plans based on individual Deepsyn Telehealth patient data.' },
  { icon: Activity, title: 'Real-time Health Monitoring', description: 'Efficient models allow for real-time analysis of patient vitals and symptoms in Deepsyn Telehealth.' },
]

function App() {
  const [activeStep, setActiveStep] = useState(0)

  const nextStep = () => {
    setActiveStep((prev) => (prev + 1) % steps.length)
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-8 text-blue-800">DeepHyper in Deepsyn Telehealth</h1>
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-4xl mb-8">
        <div className="flex justify-between mb-8 relative">
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              <div
                className={`flex flex-col items-center ${
                  index === activeStep ? 'text-blue-600' : 'text-gray-400'
                }`}
              >
                <div className={`rounded-full p-3 ${index === activeStep ? 'bg-blue-100' : 'bg-gray-100'}`}>
                  <step.icon className="w-8 h-8" />
                </div>
                <div className="text-sm text-center font-medium mt-2">{step.title}</div>
              </div>
              {index < steps.length - 1 && (
                <div className="flex-grow flex items-center justify-center">
                  <ArrowRight
                    className={`w-6 h-6 ${
                      index < activeStep ? 'text-blue-600' : 'text-gray-300'
                    }`}
                  />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2 text-blue-800">{steps[activeStep].title}</h2>
          <p className="text-gray-700 mb-4">{steps[activeStep].description}</p>
          <ul className="list-disc pl-5 space-y-2">
            {steps[activeStep].details.map((detail, index) => (
              <li key={index} className="text-gray-600">{detail}</li>
            ))}
          </ul>
        </div>
        <button
          onClick={nextStep}
          className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors font-medium"
        >
          Next Step
        </button>
      </div>
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-4xl">
        <h2 className="text-2xl font-semibold mb-4 text-blue-800">Benefits of DeepHyper in Deepsyn Telehealth</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {deepsynTelehealthBenefits.map((benefit, index) => (
            <div key={index} className="flex items-start p-4 bg-gray-50 rounded-lg">
              <benefit.icon className="w-8 h-8 text-blue-600 mr-3 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg mb-1">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App