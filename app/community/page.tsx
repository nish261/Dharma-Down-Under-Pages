'use client'

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MessageSquare, Heart, Share2, BookMarked, Newspaper } from 'lucide-react'
import Head from "next/head"
import Link from "next/link"

// Sample data
const posts = [
  {
    id: 1,
    title: "Understanding Dharmic Principles in Modern Context",
    author: {
      name: "Arjun P.",
      avatar: "/placeholder.svg"
    },
    excerpt: "Exploring how ancient Dharmic wisdom applies to contemporary challenges...",
    category: "Philosophy",
    comments: 12,
    likes: 45,
    date: "2 hours ago"
  },
  {
    id: 2,
    title: "My Journey with Meditation: A Youth Perspective",
    author: {
      name: "Sarah L.",
      avatar: "/placeholder.svg"
    },
    excerpt: "Starting my meditation practice as a young Australian has been transformative...",
    category: "Personal Stories",
    comments: 8,
    likes: 32,
    date: "5 hours ago"
  },
  {
    id: 3,
    title: "Upcoming Retreat: What to Expect",
    author: {
      name: "Michael R.",
      avatar: "/placeholder.svg"
    },
    excerpt: "A comprehensive guide for first-time retreat participants...",
    category: "Events",
    comments: 15,
    likes: 67,
    date: "1 day ago"
  }
]

const categories = [
  { name: "Philosophy", count: 45 },
  { name: "Meditation", count: 32 },
  { name: "Events", count: 28 },
  { name: "Personal Stories", count: 56 },
  { name: "Q&A", count: 23 }
]

export default function CommunityPage() {
  return (
    <main className="flex-1">
      <Head>
        <title>DDU Community Space - Dharma Down Under</title>
      </Head>
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">DDU Community Space</h1>
          <p className="text-muted-foreground text-lg">Connect with Young Australian Dharmics</p>
        </div>
        <Tabs defaultValue="discussions" className="space-y-8 mx-auto max-w-7xl">
          <TabsList className="grid w-full grid-cols-2 lg:w-[400px] mx-auto">
            <TabsTrigger value="discussions">Discussions</TabsTrigger>
            <TabsTrigger value="blogs">Blogs</TabsTrigger>
          </TabsList>
          <div className="grid gap-8 lg:grid-cols-[1fr_300px]">
            <TabsContent value="discussions" className="mt-0 space-y-4">
              <Card>
                <CardHeader>
                  <h3 className="text-lg font-semibold">Start a Discussion</h3>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <Input placeholder="What's on your mind?" />
                    <Button className="w-full bg-gradient-to-r from-orange-500 via-pink-500 to-blue-600 hover:opacity-90">
                      Create Post
                    </Button>
                  </div>
                </CardContent>
              </Card>
              {posts.map((post) => (
                <Card key={post.id}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-4">
                        <Avatar>
                          <AvatarImage src={post.author.avatar} alt={post.author.name} />
                          <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <Link href="#" className="font-semibold hover:underline">
                            {post.title}
                          </Link>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <span>{post.author.name}</span>
                            <span>•</span>
                            <span>{post.date}</span>
                          </div>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">
                        <BookMarked className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{post.excerpt}</p>
                  </CardContent>
                  <CardFooter className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <Button variant="ghost" size="sm" className="gap-1">
                        <MessageSquare className="h-4 w-4" />
                        {post.comments}
                      </Button>
                      <Button variant="ghost" size="sm" className="gap-1">
                        <Heart className="h-4 w-4" />
                        {post.likes}
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Share2 className="h-4 w-4" />
                      </Button>
                    </div>
                    <Link
                      href="#"
                      className="text-sm text-orange-500 hover:text-orange-600"
                    >
                      {post.category}
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </TabsContent>
            <TabsContent value="blogs" className="mt-0">
              <div className="space-y-4">
                {posts.map((post) => (
                  <Card key={post.id}>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <Link href="#" className="font-semibold text-lg hover:underline">
                            {post.title}
                          </Link>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                            <Avatar className="h-6 w-6">
                              <AvatarImage src={post.author.avatar} alt={post.author.name} />
                              <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <span>{post.author.name}</span>
                            <span>•</span>
                            <span>{post.date}</span>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm">
                          <BookMarked className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{post.excerpt}</p>
                    </CardContent>
                    <CardFooter className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <Button variant="ghost" size="sm" className="gap-1">
                          <Heart className="h-4 w-4" />
                          {post.likes}
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Share2 className="h-4 w-4" />
                        </Button>
                      </div>
                      <Link
                        href="#"
                        className="text-sm text-orange-500 hover:text-orange-600"
                      >
                        Read More →
                      </Link>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <h3 className="text-lg font-semibold">Categories</h3>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <Link
                        key={category.name}
                        href="#"
                        className="flex items-center justify-between rounded-lg p-2 hover:bg-muted"
                      >
                        <span>{category.name}</span>
                        <span className="text-sm text-muted-foreground">{category.count}</span>
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <h3 className="text-lg font-semibold">Quick Links</h3>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <Button variant="ghost" className="w-full justify-start gap-2">
                      <Newspaper className="h-4 w-4" />
                      Latest Posts
                    </Button>
                    <Button variant="ghost" className="w-full justify-start gap-2">
                      <BookMarked className="h-4 w-4" />
                      Saved Posts
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </Tabs>
      </div>
    </main>
  )
}