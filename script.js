const steps = [
    {
        icon: '📊',
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
        icon: '🧠',
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
        icon: '📈',
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
        icon: '⚡',
        title: 'Optimal Deepsyn Telehealth Model',
        description: 'Implement and deploy the best Deepsyn Telehealth prediction model configuration.',
        details: [
            'Select the top-performing model based on prediction accuracy and efficiency',
            'Validate the model using a separate set of Deepsyn Telehealth patient data',
            'Integrate the optimized model into the Deepsyn Telehealth application\'s backend',
            'Set up continuous monitoring and periodic re-optimization of the model'
        ]
    }
];

const benefits = [
    { icon: '❤️', title: 'Improved Patient Outcomes', description: 'Optimized models lead to more accurate predictions and better patient care in Deepsyn Telehealth.' },
    { icon: '🩺', title: 'Efficient Diagnoses', description: 'DeepHyper-tuned models can quickly identify potential health issues from Deepsyn Telehealth data.' },
    { icon: '🧠', title: 'Personalized Treatment', description: 'Optimized algorithms can suggest personalized treatment plans based on individual Deepsyn Telehealth patient data.' },
    { icon: '📊', title: 'Real-time Health Monitoring', description: 'Efficient models allow for real-time analysis of patient vitals and symptoms in Deepsyn Telehealth.' }
];

let currentStep = 0;

function renderSteps() {
    const stepsContainer = document.querySelector('.steps');
    stepsContainer.innerHTML = '';
    
    steps.forEach((step, index) => {
        const stepElement = document.createElement('div');
        stepElement.className = `step ${index === currentStep ? 'active' : ''}`;
        stepElement.innerHTML = `
            <div class="step-icon">${step.icon}</div>
            <div class="step-title">${step.title}</div>
            <div class="arrow"></div>
        `;
        stepsContainer.appendChild(stepElement);
    });
}

function renderStepDetails() {
    const detailsContainer = document.querySelector('.step-details');
    const step = steps[currentStep];
    detailsContainer.innerHTML = `
        <h3>${step.title}</h3>
        <p>${step.description}</p>
        <ul>
            ${step.details.map(detail => `<li>${detail}</li>`).join('')}
        </ul>
    `;
}

function renderBenefits() {
    const benefitsContainer = document.querySelector('.benefits-grid');
    benefits.forEach(benefit => {
        const benefitElement = document.createElement('div');
        benefitElement.className = 'benefit';
        benefitElement.innerHTML = `
            <div class="benefit-icon">${benefit.icon}</div>
            <div class="benefit-title">${benefit.title}</div>
            <div class="benefit-description">${benefit.description}</div>
        `;
        benefitsContainer.appendChild(benefitElement);
    });
}

function nextStep() {
    currentStep = (currentStep + 1) % steps.length;
    renderSteps();
    renderStepDetails();
}

document.addEventListener('DOMContentLoaded', () => {
    renderSteps();
    renderStepDetails();
    renderBenefits();
    
    document.getElementById('nextStep').addEventListener('click', nextStep);
});