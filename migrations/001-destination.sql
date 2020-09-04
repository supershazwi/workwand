-- Up
CREATE TABLE Destination (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	name TEXT,
	slug TEXT
);

CREATE TABLE Role (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	name TEXT,
	slug TEXT,
	destinationId INTEGER REFERENCES Destination(id)
);

CREATE TABLE Plan (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	name TEXT,
	category TEXT,
	slug TEXT,
	remarks TEXT,
	application_duration INTEGER,
	validity INTEGER,
	renewable BOOLEAN,
	passes_for_family BOOLEAN,
	foreign_worker_levy BOOLEAN,
	quota INTEGER,
	application_link TEXT,
	destinationId INTEGER REFERENCES Destination(id)
);

CREATE TABLE Plan_Eligibility_Details (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	content TEXT,
	category TEXT,
	planId INTEGER REFERENCES Plan(id)
);

CREATE TABLE Plan_Age_Eligibility (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	lower_bound_age INTEGER,
	upper_bound_age INTEGER,
	planId INTEGER REFERENCES Plan(id)
);	

CREATE TABLE Plan_Country_Eligibility (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	country TEXT,
	planId INTEGER REFERENCES Plan(id)
);

CREATE TABLE Source (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	page TEXT,
	name TEXT,
	link TEXT
);

CREATE TABLE Plan_Cost (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	content TEXT,
	planId INTEGER REFERENCES Plan(id)
);

CREATE TABLE Plan_Step (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	sequence INTEGER,
	content TEXT,
	planId INTEGER REFERENCES Plan(id)
);


INSERT INTO Destination (name, slug) values ('Singapore', 'singapore');
INSERT INTO Destination (name, slug) values ('Malaysia', 'malaysia');
INSERT INTO Destination (name, slug) values ('Indonesia', 'indonesia');
INSERT INTO Destination (name, slug) values ('Thailand', 'thailand');
INSERT INTO Destination (name, slug) values ('Cambodia', 'cambodia');
INSERT INTO Destination (name, slug) values ('Myanmar', 'myanmar');
INSERT INTO Destination (name, slug) values ('Vietnam', 'vietnam');

INSERT INTO Role (name, slug, destinationId) values ('Software Developer', 'software-developer', 1);

INSERT INTO Plan (name, category, slug, remarks, application_duration, validity, renewable, passes_for_family, foreign_worker_levy, quota, application_link, destinationId) values ('Work Holiday Pass (under Work Holiday Programme)', 'Trainees & Students', 'work-holiday-pass-under-work-holiday-programme-singapore', '', 21, 180, FALSE, FALSE, FALSE, 2000, 'https://service2.mom.gov.sg/workpass/whp/whp_applications', 1);
INSERT INTO Plan (name, category, slug, remarks, application_duration, validity, renewable, passes_for_family, foreign_worker_levy, quota, application_link, destinationId) values ('Work Holiday Pass (under Work and Holiday Visa Programme)', 'Trainees & Students', 'work-holiday-pass-under-work-and-holiday-visa-programme-singapore', 'For Australian Students', 28, 360, FALSE, FALSE, FALSE, 500, 'https://service2.mom.gov.sg/workpass/whvp/whvp_applications', 1);
INSERT INTO Plan (name, category, slug, remarks, application_duration, validity, renewable, passes_for_family, foreign_worker_levy, quota, application_link, destinationId) values ('Employment Pass', 'Professionals', 'employment-pass-singapore', '', 21, 730, TRUE, TRUE, FALSE, -1, 'https://www.mom.gov.sg/eservices/services/apply-for-a-new-ep-and-s-pass', 1);
INSERT INTO Plan (name, category, slug, remarks, application_duration, validity, renewable, passes_for_family, foreign_worker_levy, quota, application_link, destinationId) values ('EntrePass', 'Professionals', 'entrepass-singapore', '', 56, 365, TRUE, TRUE, FALSE, -1, 'https://form.gov.sg/#!/5ce3a8b404ef480010a73da3', 1);

INSERT INTO Plan_Cost (content, planId) values ('175 SGD for each pass', 1);
INSERT INTO Plan_Cost (content, planId) values ('30 SGD for each Multiple Journey Visa', 1);

INSERT INTO Plan_Cost (content, planId) values ('175 SGD for each pass', 2);
INSERT INTO Plan_Cost (content, planId) values ('30 SGD for each Multiple Journey Visa', 2);

INSERT INTO Plan_Cost (content, planId) values ('105 SGD for each pass upon application', 3);
INSERT INTO Plan_Cost (content, planId) values ('225 SGD for each pass upon issuance', 3);
INSERT INTO Plan_Cost (content, planId) values ('30 SGD for each Multiple Journey Visa', 3);

INSERT INTO Plan_Cost (content, planId) values ('105 SGD for each pass upon application', 4);
INSERT INTO Plan_Cost (content, planId) values ('225 SGD for each pass upon issuance', 4);
INSERT INTO Plan_Cost (content, planId) values ('30 SGD for each Multiple Journey Visa', 4);

INSERT INTO Source (page, name, link) values ('work-holiday-pass-under-work-holiday-programme-singapore', 'Work Holiday Pass (under Work Holiday Programme)', 'https://www.mom.gov.sg/passes-and-permits/work-holiday-programme');
INSERT INTO Source (page, name, link) values ('work-holiday-pass-under-work-and-holiday-visa-programme-singapore', 'Work Holiday Pass (under Work and Holiday Visa Programme)', 'https://www.mom.gov.sg/passes-and-permits/work-and-holiday-visa-programme');
INSERT INTO Source (page, name, link) values ('employment-pass-singapore', 'Employment Pass', 'https://www.mom.gov.sg/passes-and-permits/employment-pass');
INSERT INTO Source (page, name, link) values ('entrepass-singapore', 'EntrePass', 'https://www.mom.gov.sg/passes-and-permits/entrepass');

INSERT INTO Plan_Eligibility_Details (content, category, planId) values ('You are aged 18 to 25 at the time of application.', 'General', 1);
INSERT INTO Plan_Eligibility_Details (content, category, planId) values ('You are an undergraduate or graduate of a university in Australia, France, Germany, Hong Kong, Japan, Netherlands, New Zealand, Switzerland, United Kingdom or United States.', 'General', 1);
INSERT INTO Plan_Eligibility_Details (content, category, planId) values ('Your university is recognised by the government of the respective ten countries or regions.', 'General', 1);
INSERT INTO Plan_Eligibility_Details (content, category, planId) values ('For undergraduates: you have been a resident and a full-time student of the university for at least 3 months before applying for the pass.', 'General', 1);
INSERT INTO Plan_Eligibility_Details (content, category, planId) values ('For graduates: you were a resident and a full-time student of the university.', 'General', 1);

INSERT INTO Plan_Age_Eligibility (lower_bound_age, upper_bound_age, planId) values (18, 25, 1);

INSERT INTO Plan_Country_Eligibility (country, planId) values ("Australia", 1);
INSERT INTO Plan_Country_Eligibility (country, planId) values ("France", 1);
INSERT INTO Plan_Country_Eligibility (country, planId) values ("Germany", 1);
INSERT INTO Plan_Country_Eligibility (country, planId) values ("Hong Kong", 1);
INSERT INTO Plan_Country_Eligibility (country, planId) values ("Japan", 1);
INSERT INTO Plan_Country_Eligibility (country, planId) values ("Netherlands", 1);
INSERT INTO Plan_Country_Eligibility (country, planId) values ("New Zealand", 1);
INSERT INTO Plan_Country_Eligibility (country, planId) values ("Switzerland", 1);
INSERT INTO Plan_Country_Eligibility (country, planId) values ("United Kingdom", 1);
INSERT INTO Plan_Country_Eligibility (country, planId) values ("United States", 1);

INSERT INTO Plan_Eligibility_Details (content, category, planId) values ('You are an Australian citizen.', 'General', 2);
INSERT INTO Plan_Eligibility_Details (content, category, planId) values ('You are aged 18 to 30 at the time of application.', 'General', 2);
INSERT INTO Plan_Eligibility_Details (content, category, planId) values ('You hold a university degree, or have completed the equivalent of two years of full-time undergraduate university study.', 'General', 2);

INSERT INTO Plan_Age_Eligibility (lower_bound_age, upper_bound_age, planId) values (18, 30, 2);

INSERT INTO Plan_Country_Eligibility (country, planId) values ("Australia", 2);

INSERT INTO Plan_Eligibility_Details (content, category, planId) values ('Have a job offer in Singapore.', 'General', 3);
INSERT INTO Plan_Eligibility_Details (content, category, planId) values ('Work in a managerial, executive or specialised job.', 'General', 3);
INSERT INTO Plan_Eligibility_Details (content, category, planId) values ('Earn a fixed monthly salary of at least $4,500 (older, more experienced candidates need higher salaries).', 'General', 3);
INSERT INTO Plan_Eligibility_Details (content, category, planId) values ('Have acceptable qualifications, usually a good university degree, professional qualifications or specialised skills.', 'General', 3);

INSERT INTO Plan_Age_Eligibility (lower_bound_age, upper_bound_age, planId) values (18, 99, 3);

INSERT INTO Plan_Country_Eligibility (country, planId) values ("All", 3);

INSERT INTO Plan_Eligibility_Details (content, category, planId) values ('Have started, or intend to start, a private limited company registered with ACRA.', 'General', 4);
INSERT INTO Plan_Eligibility_Details (content, category, planId) values ('If registered, the company must be less than 6 months old on the date you apply.', 'General', 4);
INSERT INTO Plan_Eligibility_Details (content, category, planId) values ('Your company raised funding of at least $100,000 from a government investment vehicle, venture capitalist (VC) or business angel that is recognised by a Singapore Government agency.', 'Entrepreneur', 4);
INSERT INTO Plan_Eligibility_Details (content, category, planId) values ('Your company is an existing incubatee at an incubator or accelerator in Singapore that is recognised by the Government.', 'Entrepreneur', 4);
INSERT INTO Plan_Eligibility_Details (content, category, planId) values ('You have significant business experience or network and promising entrepreneurial track record of starting highly-scalable businesses and want to establish, develop and manage a new or existing business in Singapore.', 'Entrepreneur', 4);
INSERT INTO Plan_Eligibility_Details (content, category, planId) values ('You or your company holds an intellectual property (IP), registered with an approved national IP institution, which delivers a significant competitive advantage to your proposed business that cannot be easily replicated.', 'Innovator', 4);
INSERT INTO Plan_Eligibility_Details (content, category, planId) values ('Your company has an ongoing research collaboration with a research institution under the Agency for Science, Technology and Research (A*STAR), an Institute of Higher Learning (IHL) in Singapore.', 'Innovator', 4);
INSERT INTO Plan_Eligibility_Details (content, category, planId) values ('You have exceptional technical or domain expertise in an area related to your proposed business.', 'Innovator', 4);
INSERT INTO Plan_Eligibility_Details (content, category, planId) values ('To find out more about the eligibility criteria, you can contact Enterprise Singapore at enquiry@enterprisesg.gov.sg.', 'Investor', 4);

INSERT INTO Plan_Age_Eligibility (lower_bound_age, upper_bound_age, planId) values (18, 99, 4);

INSERT INTO Plan_Country_Eligibility (country, planId) values ("All", 4);

-- Down
DROP TABLE Destination;
DROP TABLE Role;
DROP TABLE Plan;
DROP TABLE Plan_Cost;
DROP TABLE Source;
DROP TABLE Plan_Eligibility_Details;
DROP TABLE Plan_Age_Eligibility;
DROP TABLE Plan_Country_Eligibility;
DROP TABLE Plan_Step;