---
layout: post
title: Disentangling homonym representations in BERT
---
I'm a systems neuroscientist by training, just getting my feet wet in studying the circuit mechanisms by which transformers represent sequences of inputs in a way that supports "understanding," as measured by NLP task benchmarks, excited tweets, etc.

In my first series of posts, I am going to be looking at how a deep transformer model (BERT-Base, using the huggingface implementation) progressively segregates representations of homonyms based on semantic differences inferred from context. 

The primary inspiration for this work is a recent series of papers on how [perceptual manifolds of objects](https://journals.aps.org/prx/abstract/10.1103/PhysRevX.8.031003) are progressively disentangled both [across layers of deep CNNs](https://www.nature.com/articles/s41467-020-14578-5) and [ascending through mouse visual cortical areas](https://www.biorxiv.org/content/10.1101/2020.08.20.258798v1.abstract). Images of different objects that might be similar in pixel space are represented increasingly differently, while images of the same object that are quite different in pixel space are represented more similarly.

The big picture question I'm getting at here will be, can we think of transformers as working in a similar way on sequence data; and, if so, what are the mechanisms by which the representations of superficially similar but semantically distinct subsequences come to support their distinction.

More to come soon!
