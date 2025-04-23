import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, DollarSign, User, Tag, Calendar } from 'lucide-react';

const ProductDetails = () => {
  const { id } = useParams();

  // Mock product data - in a real app, this would come from your database
  const product = {
    id: '1',
    title: 'Textbook - Introduction to Psychology',
    price: 45.99,
    description: 'Like new condition, 8th edition. Perfect for PSY101. Includes online access code (unused). Minor highlighting in first two chapters only.',
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    seller: 'John D.',
    condition: 'Like New',
    postedDate: '2024-02-15',
    category: 'Textbooks',
    location: 'Campus Library'
  };

  