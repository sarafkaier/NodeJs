module.exports = {
    initialize: function () {
        const db = require("./db.config");

        let questions = [

            { 
                question: 'Qui a écrit Les Misérables ?', 
                reponse1: 'Emile Zola', 
                reponse2: 'Stendhal', 
                reponse3: 'Victor Hugo', 
                reponse4: 'Beaudelaire', 
                bonneReponse: 3, 
                categorieId: 1 
            },
            { 
                question: 'Dans quelle pièce de Molière le personnage d\'Harpagon apparaît', 
                reponse1: 'Dom Juan', 
                reponse2: 'L\'Avare', 
                reponse3: 'Le Médecin malgré lui', 
                reponse4: 'Depardieu', 
                bonneReponse: 2, 
                categorieId: 1 
            },
            { 
                question: 'On a transféré au Panthéon, en novembre 2002, les cendres de :', 
                reponse1: 'Alexandre Dumas', 
                reponse2: 'Victor Hugo', 
                reponse3: 'George Sand', 
                reponse4: 'Simone Veil', 
                bonneReponse: 2, 
                categorieId: 1 
            },
            { 
                question: 'Georges Simenon est né :', 
                reponse1: 'A Paris', 
                reponse2: 'Marseille', 
                reponse3: 'Montpellier', 
                reponse4: 'A Liège', 
                bonneReponse: 1, 
                categorieId: 1 
            },
            { 
                question: 'Amélie Nothomb n’a pas écrit :', 
                reponse1: 'Stupeur et tremblements', 
                reponse2: 'Hygièene de l\'assassin', 
                reponse3: 'Truismes', 
                reponse4: 'Amhed Masouri', 
                bonneReponse: 3, 
                categorieId: 1 
            },

            { 
                question: 'L\'eau à l\'état solide, est connu sous le nom', 
                reponse1: 'Glace', 
                reponse2: 'Eau de Seltz', 
                reponse3: 'Cristal', 
                reponse4: 'Neige Carbonique', 
                bonneReponse: 3, 
                categorieId: 2 
            },
            { 
                question: 'L\'eau à température', 
                reponse1: 'a', 
                reponse2: 'reponbse2', 
                reponse3: 'reponcse3', 
                reponse4: 'd', 
                bonneReponse: 3, 
                categorieId: 2 
            },
            { 
                question: 'Une roche en fusion, émise par un volcan lors d’une éruption sont connu comme', 
                reponse1: 'Lave', 
                reponse2: 'Ardoise', 
                reponse3: 'Marbre', 
                reponse4: 'Pierre de Feu', 
                bonneReponse: 2, 
                categorieId: 2 
            },
            { 
                question: 'Lequel des éléments suivants est un constituant chimique de particules de sable?', 
                reponse1: 'Carbonne', 
                reponse2: 'Silicium', 
                reponse3: 'Fer', 
                reponse4: 'Sodium', 
                bonneReponse: 3, 
                categorieId: 2 
            },
            { 
                question: 'La légère inclinaison de l\'axe de rotation de la terre fait qu\'il y a des', 
                reponse1: 'Marées', 
                reponse2: 'Jours et nuits', 
                reponse3: 'Tremblements de Terre', 
                reponse4: 'Saisons', 
                bonneReponse: 3, 
                categorieId: 2 
            },

            { 
                question: 'Que signifie CNR ?', 
                reponse1: 'Comité National de la Résistance', 
                reponse2: 'Comité National de la République', 
                reponse3: 'Conseil National de la Résistance', 
                reponse4: 'Conseil National de la République', 
                bonneReponse: 3, 
                categorieId: 3 
            },
            { 
                question: 'Comment s’appelle la répression exercée contre les Français soupçonnés d’avoir collaboré avec l’ennemi ?', 
                reponse1: 'La nationalisation', 
                reponse2: 'La répression', 
                reponse3: 'Lépuration', 
                reponse4: 'La collaboration', 
                bonneReponse: 3, 
                categorieId: 3 
            },
            { 
                question: 'Quelle est la date de la libération de Paris ?', 
                reponse1: 'Le - juin 1944', 
                reponse2: 'Le 25 aout', 
                reponse3: 'Le 6 juin 1945', 
                reponse4: 'Le 25 août 1945', 
                bonneReponse: 2, 
                categorieId: 3 
            },
            { 
                question: 'Nomme le premier chef du Gouvernement Provisoire de la République Française.', 
                reponse1: 'Maréchal Pétain', 
                reponse2: 'Charles de Gaulle', 
                reponse3: 'René Coty', 
                reponse4: 'Vincent Auriol', 
                bonneReponse: 2, 
                categorieId: 3 
            },
            { 
                question: 'Quelle est la date de l’octroi du droit de vote pour les femmes en France ?', 
                reponse1: '1944', 
                reponse2: '1645', 
                reponse3: '1946', 
                reponse4: '1947', 
                bonneReponse: 1, 
                categorieId: 3 
            },
            { 
                question: 'Qui a réalisé le film Kill Bill ?', 
                reponse1: 'Roman Polanski ', 
                reponse2 : ' Diane lane ', 
                reponse3: 'Quentin Tarentino', 
                reponse4: 'Robert Kelly', 
                bonneReponse : 3, 
                categorieId : 4
            },
            { 
                question: 'En quelle année est mort le producteur du film "Les Temps modernes" ?', 
                reponse1: 'Robert Hue', 
                reponse2 : 'Kim JOng Hoe', 
                reponse3: 'Charlie Chaplin', 
                reponse4: 'Mustapha Keita', 
                bonneReponse : 3, 
                categorieId : 4
            },
            { 
                question: ' hello motherf**cker qui est le dépositaire de cette réplique ?', 
                reponse1: 'Sara Fkaier', 
                reponse2 : 'Monkey D luffy', 
                reponse3: 'Samuel L Jackson', 
                reponse4: 'Mulan', 
                bonneReponse : 3, 
                categorieId : 4
            },
            { 
                question: 'Aya de Youpougou est film qui traite du quotidien des filles de ?', 
                reponse1: 'Paris', 
                reponse2 : 'Bamaki', 
                reponse3: 'Abidjan', 
                reponse4: 'Pretoria', 
                bonneReponse : 3, 
                categorieId : 4
            },
            { 
                question: 'Quel est le nom de la série qui traite de notre rapport à l\'écran ?', 
                reponse1: 'House of cards', 
                reponse2 : 'G.O.T', 
                reponse3: 'Black Mirro', 
                reponse4: 'Spartacus', 
                bonneReponse : 3, 
                categorieId : 4
            },
            { 
                question: 'quel est le nom du premier album de Kanye ', 
                reponse1: 'Trough the Wire', 
                reponse2 : 'The revolution', 
                reponse3: 'The College Dropout', 
                reponse4: 'My twisted Dark Fantasy', 
                bonneReponse : 3, 
                categorieId : 5
            },
            { 
                question: 'Charles Aznavour est mort en quel année ?', 
                reponse1: '2010', 
                reponse2 : '2019', 
                reponse3: '2018', 
                reponse4: '2017', 
                bonneReponse : 3, 
                categorieId : 5
            },
            { 
                question: 'Qui a détroné le record de  Edith Piaf en terme de vente ?', 
                reponse1: 'Jennifer', 
                reponse2 : 'Amel Bent ', 
                reponse3: 'Aya Nakamaura', 
                reponse4: 'Louane', 
                bonneReponse : 3, 
                categorieId : 5
            },
            { 
                question: ' Quel est le plus gros tube de Johnny Halliday ', 
                reponse1: 'oh Marie', 
                reponse2 : 'le pénitencier', 
                reponse3: 'Marie', 
                reponse4: 'Sang pour Sang', 
                bonneReponse : 3, 
                categorieId : 5
            },
            { 
                question: 'Comme un enfant aux yeux de lumière Qui voit passer au loin.....', 
                reponse1: 'le volant', 
                reponse2 : 'le soleil', 
                reponse3: 'les oiseaux', 
                reponse4: 'les moineaux', 
                bonneReponse : 3, 
                categorieId : 5
            },
            { 
                question: 'comment Kim K s\'est fait connaitre ?', 
                reponse1: 'avec un hit musical', 
                reponse2 : 'en accomplissant un record sportif', 
                reponse3: 'En se faisant éclater les fesses dans une sexe tape ', 
                reponse4: 'En intégrant des vidéos sur Instagram', 
                bonneReponse : 3, 
                categorieId : 6
            },
            { 
                question: 'Qui est l\'acteur le plus bankable de tous les temps  ?', 
                reponse1: 'Will Smith', 
                reponse2: 'Bradd Pitt', 
                reponse3: 'Harisson Ford', 
                reponse4: 'Leonardo DiCaprio', 
                bonneReponse : 3, 
                categorieId : 6
            },
            { 
                question: 'Quel est le nom de la compagne de Matt Pokora ?', 
                reponse1: 'Britney Spears', 
                reponse2:'Lorie',
                reponse3:'Christina Willians',
                reponse4: 'Yann MOIX', 
                bonneReponse : 3, 
                categorieId : 6 
            },
            { 
                question: ' Quel est le nom de l\'acteur qui a fait un grand écart entre deux camions ?', 
                reponse1: 'Bruce Willis', 
                reponse2: 'Bruce Lee', 
                reponse3: 'JCVD', 
                reponse4: 'Harry Potter', 
                bonneReponse : 3, 
                categorieId : 6
            },
            { 
                question: 'Quel est le nom du présentateur qui anime l\'emission Pékin Express', 
                reponse1: 'Cauet', 
                reponse2: 'Benjamin Castaldi', 
                reponse3: 'Stéphane Rottemberg', 
                reponse4: 'Denis Brognart', 
                bonneReponse : 3, 
                categorieId : 6
            }


        ];

        let categories = [
            { 
                name : 'Littérature'
            },
            { 
                name : 'Science'
            },
            { 
                name : 'Histoire / Géographie'
            },
            { 
                name : 'Cinéma'
            },
            { 
                name : 'Musique'
            },
            { 
                name : 'People'
            }
        ];


        const CategorieDb = db.categorie;
        const QuestionDb = db.question;

        categories.forEach((categorie) => {
            CategorieDb.create(categorie);
        });

        questions.forEach((question) => {
            QuestionDb.create(question);
        });
    }
};