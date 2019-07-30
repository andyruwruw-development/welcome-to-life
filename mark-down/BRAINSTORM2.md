# Machine Learning

Two Modes of Learning:
- Unsupervised Learning
  - Clustering
- Supervised Learning
  - Classification
  - Regression

Parts to Learning:
- Model
- Parameters
- Learner

# Unsupervised Learning

Group and interpret data based on input data only.

Result - Clustering

    Unsupervised learning finds hidden patterns or intrinsic structures in data. It is used to draw inferences from datasets consisting of input data without labeled responses.

## Clustering
    Clustering is the most common unsupervised learning technique. It is used for exploratory data analysis to find hidden patterns or groupings in data. Applications for cluster analysis include gene sequence analysis, market research, and object recognition.
---

# Supervised Learning

Develop predictive model based on input and output data.

Result - Classification, Regression

    Supervised machine learning builds a model that makes predictions based on evidence in the presence of uncertainty. A supervised learning algorithm takes a known set of input data and known responses to the data (output) and trains a model to generate reasonable predictions for the response to new data. Use supervised learning if you have known data for the output you are trying to predict.

    Supervised learning uses classification and regression techniques to develop predictive models.

## Classification

    Classification techniques predict discrete responses—for example, whether an email is genuine or spam, or whether a tumor is cancerous or benign. Classification models classify input data into categories. Typical applications include medical imaging, speech recognition, and credit scoring.

    Use classification if your data can be tagged, categorized, or separated into specific groups or classes. For example, applications for hand-writing recognition use classification to recognize letters and numbers. In image processing and computer vision, unsupervised pattern recognition techniques are used for object detection and image segmentation.

## Regression

    Regression techniques predict continuous responses—for example, changes in temperature or fluctuations in power demand. Typical applications include electricity load forecasting and algorithmic trading.

    Use regression techniques if you are working with a data range or if the nature of your response is a real number, such as temperature or the time until failure for a piece of equipment.

# Which to Use

Choose `supervised learning` if you need to train a model to make a prediction--for example, the future value of a continuous variable, such as temperature or a stock price, or a classification—for example, identify makes of cars from webcam video footage.

Choose `unsupervised learning` if you need to explore your data and want to train a model to find a good internal representation, such as splitting data up into clusters.

# Parts to Machine Learning

## Model
The system that makes predictions or identifications

## Parameters
Signals or factors used by the model to form its decisions

## Learner
The system that adjusts these parameters - and in turn the model - by looking at the differences in predictions versus actual outcome.

## The Process
1. `Input` is given to the `Model`
2. The `Model` makes a `prediction`.
3. The `Learner` takes the `prediction` and compares it to the `truth`.
4. The `Learner` adjusts the `Parameters`.
5. The `Model` remakes a `prediction` with new `Parameters`.

The concept of `Gradient Learning` is important, or making small adjustments until the match is made.

# Result Comparisons

1. `True Positive` (TP): Positive result agress with truth.
2. `True Negative` (TN): Negative result agress with truth.
3. `False Positive` (FP): Positive result disagrees with truth.
4. `False Negative` (FN): Negative result disagrees with truth.

`Total Error` = `FP` + `FN`

# Noise

`Noise` is unwanted anomalies in the data that can disguise or complicate underlying relationships and weaken the learning process.

## Causes
1. Errors or omissions in the input data
2. Errors in data labeling
3. Hidden attributes which are unobservable and for which no data is available, but which affect the classification.

# Finding the Matching Function

## Inductive Bias

Ingoing assumptions, or hypothesis that a certain model or algorithm is the best one to fit the training data.

## Generalization
Once a function is found, introducing new data outside the training set and seeing how well the model does is `generalization`.

If it fails with new data, it is `underfitting`.

If the fuction is overly complicated where it could have been linear, it is `overfitting`.

Success is found through balancing three factors:
1. The amount of data in the training set
2. The level of the generalization error on new data
3. The complexity of the original hypothesis which was fitted to the data

# Types of Output

## Discrete Classifiers

A binary output (YES or NO, 1 or 0) to indicate whether the algorithm has classified the input instance as positive or negative. Using our earlier example, the algorithm would simply say that the application is ‘high potential’ or it is not. This is particularly useful if there is no expectation of human intervention in the decision making process, such as if the company has no upper or lower limit to the number of applications which could be considered ‘high potential’.

## Probabilistic Classifiers

A probabilistic output (a number between 0 and 1) which represents the likelihood that the input falls into the positive class. For example, the algorithm may indicate that the application has a 0.68 probability of being high potential. This is particularly useful if human intervention is to be expected in the decision making process, such as if the company has a limit to the number of applications which could be considered ‘high potential’. Note that a probabilistic output becomes a binary output as soon as a human defines a ‘cutoff’ to determine which instances fall into the positive class.

# Types

## Linear regression

## Support vector machines (SVMs)

## Non-Parametric Learners

## k-nearest neighbors (k-NN)
Looks for neighboring elements - k elements to be exact.

Choosing k: tuning hyperparameters with cross-validation

To decide which value of k to use, you can test different k-NN models using different values of k with cross-validation.

1. Split your training data into segments, and train your model on all but one of the segments; use the held-out segment as the “test” data.
2. See how your model performs by comparing your model’s predictions (ŷ) to the actual values of the test data (y).
3. Pick whichever yields the lowest error, on average, across all iterations.

Higher k prevents overfitting - too high, and you're biased and inflexible.

## Decision trees, random forests
Decision paths, yous set nodes and depth.
leaf nodes - final results

## Ensemble Model
A single decision tree can make a lot of wrong calls because it has very black-and-white judgments. A random forest is a meta-estimator that aggregates many decision trees, with some helpful modifications:

1. The number of features that can be split on at each node is limited to some percentage of the total (this is a hyperparameter you can choose — see scikit-learn documentation for details). This ensures that the ensemble model does not rely too heavily on any individual feature, and makes fair use of all potentially predictive features.
2. Each tree draws a random sample from the original data set when generating its splits, adding a further element of randomness that prevents overfitting.
These modifications also prevent the trees from being too highly correlated. 

Without #1 and #2 above, every tree would be identical, since recursive binary splitting is deterministic.

## k-means clustering
Clustering into groups.

Larger K - more groups.

Each group has a centroid.

Here are the steps to k-means clustering:
1. Define the k centroids. Initialize these at random (there are also fancier algorithms for initializing the centroids that end up converging more effectively).
2. Find the closest centroid & update cluster assignments. Assign each data point to one of the k clusters. Each data point is assigned to the nearest centroid’s cluster. Here, the measure of “nearness” is a hyperparameter — often Euclidean distance.
3. Move the centroids to the center of their clusters. The new position of each centroid is calculated as the average position of all the points in its cluster.
Keep repeating steps 2 and 3 until the centroid stop moving a lot at each iteration (i.e., until the algorithm converges).

## Hierarchical clustering

Hierarchical clustering is similar to regular clustering, except that you’re aiming to build a hierarchy of clusters. This can be useful when you want flexibility in how many clusters you ultimately want.

Here are the steps for hierarchical clustering:
1. Start with N clusters, one for each data point.
2. Merge the two clusters that are closest to each other. Now you have N-1 clusters.
3. Recompute the distances between the clusters. There are several ways to do this (see this tutorial for more details). One of them (called average-linkage clustering) is to consider the distance between two clusters to be the average distance between all their respective members.
4. Repeat steps 2 and 3 until you get one cluster of N data points. You get a tree (also known as a dendrogram) like the one below.
5. Pick a number of clusters and draw a horizontal line in the dendrogram. For example, if you want k=2 clusters, you should draw a horizontal line around “distance=20000.” You’ll get one cluster with data points 8, 9, 11, 16 and one cluster with the rest of the data points. In general, the number of clusters you get is the number of intersection points of your horizontal line with the vertical lines in the dendrogram.

# Dimensionality reduction

## Principal component analysis (PCA)


# Vocabulary
### `Classification`
### `Clustering`
### `Gradient Learning`
Making little adjustments over and over util thigs are right.
### `Learner`
### `Model`
### `Parameters`
### `Prediction`
### `Regression`
### `Supervised Learning`
### `Training Set`
### `Truth`
### `Unsupervised Learning`


β0
β1
[dz/dβ0, dz/dβ1] - total loss is increased or decreased if you icrease either.